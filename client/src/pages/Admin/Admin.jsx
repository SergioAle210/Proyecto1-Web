import { useEffect, useState, Suspense } from 'react'

import Loading from '@components/Loading'
import PostAdmin from '@components/PostAdmin'
import Button from '@components/Button'
import useApi from '@hooks/useApi'
import useForm from '@hooks/useForm'
import ModalForm from '@components/ModalForm'
import EmptyState from '@components/EmptyState'

import './Admin.css'

const Admin = () => {
  const { fetchData } = useApi()
  const { values, setValues, handleChange, handleSubmit } = useForm({
    id: null,
    title: '',
    content: '',
    homeTeam: '',
    awayTeam: '',
    homeScore: '',
    awayScore: '',
    imageUrl: ''
  })
  const [posts, setPosts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)

  useEffect(() => {
    fetchData('http://127.0.0.1:21122/posts').then(response => {
      if (response.data && Array.isArray(response.data)) {
        setPosts(response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
      } else {
        console.error("Received data is not formatted as expected:", response);
        setPosts([]);
      }
    });
  }, [fetchData])

  const handleDelete = postId => {
    fetchData(`http://127.0.0.1:21122/posts/${postId}`, { method: 'DELETE' })
      .then(() => setPosts(posts.filter(post => post.id !== postId)))
      .catch(err => console.error("Error deleting post:", err)) // Añadir manejo de errores
  }
  
  const openModal = (post = null) => {
    if (post) {
      console.log(post)
      setValues({
        title: post.title,
        content: post.content,
        homeTeam: post.home_team,
        awayTeam: post.away_team,
        homeScore: post.home_score,
        awayScore: post.away_score,
        imageUrl: post.image_url
    })
      setIsUpdate(true)
    } else {
      setValues({
        id: null,
        title: '',
        content: '',
        homeTeam: '',
        awayTeam: '',
        homeScore: '',
        awayScore: '',
        imageUrl: ''
      })
      setIsUpdate(false)
    }
    setIsModalOpen(true)
  }

  const savePost = () => {
    const method = values.id ? 'PUT' : 'POST'
    const url = values.id ? `http://127.0.0.1:21122/posts/${values.id}` : 'http://127.0.0.1:21122/posts'
    fetchData(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    }).then(updatedOrNewPost => {
      if (method === 'POST') {
        setPosts([...posts, updatedOrNewPost])
      } else {
        setPosts(posts.map(post => post.id === values.id ? updatedOrNewPost : post))
      }
      setIsModalOpen(false)
    }).catch(err => console.error("Error saving post:", err)); // Añadir manejo de errores
  }

  return (
    <div className='admin'>
      <Suspense fallback={<Loading />}>
        {posts.length > 0 ? posts.map(post => (
          <PostAdmin key={post.id} {...post} onDelete={() => handleDelete(post.id)} onUpdate={() => openModal(post)}/>
        )) : <EmptyState />}    
        <Button text={"Create Post"} onClick={() => openModal()} />     
        <ModalForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit(savePost)}
          handleChange={handleChange}
          values={values}
          isUpdate={isUpdate}
        />  
      </Suspense>
    </div>
  )
}

export default Admin
