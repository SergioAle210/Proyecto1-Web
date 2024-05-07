import React, { useEffect, useState, Suspense } from 'react'

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
  const { values, setValues, handleChange } = useForm({
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

  const fetchPost = async () => {
    await fetchData('http://127.0.0.1:21122/posts').then(response => {
      if (response.data && Array.isArray(response.data)) {
        setPosts(response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)))
      } else {
        console.error('Received data is not formatted as expected:', response)
        setPosts([])
      }
    })
  }

  useEffect(() => {
    fetchPost()
  }, [])

  const handleDelete = postId => {
    fetchData(`http://127.0.0.1:21122/posts/${postId}`, { method: 'DELETE' })
      .then(() => setPosts(posts.filter(post => post.id !== postId)))
      .catch(err => console.error('Error deleting post:', err)) // Añadir manejo de errores
  }

  const openModal = (post = null) => {
    if (post) {
      console.log('Editing post:', post)
      setValues({
        id: post.id,
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
        homeScore: 0,
        awayScore: 0,
        imageUrl: ''
      })
      setIsUpdate(false)
    }
    setIsModalOpen(true)
  }

  const savePost = async (formData) => {
    const { title, content, homeTeam, awayTeam, homeScore, awayScore, imageUrl } = formData
    const method = values.id ? 'PUT' : 'POST'
    const url = values.id ? `http://127.0.0.1:21122/posts/${values.id}` : 'http://127.0.0.1:21122/posts'
    console.log('Saving post with method:', method, 'and values:', formData)

    await fetchData(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        content,
        homeTeam,
        awayTeam,
        homeScore: parseInt(homeScore, 10), // Asegurándote de que es un número
        awayScore: parseInt(awayScore, 10), // Asegurándote de que es un número
        imageUrl
      })
    })

    await fetchPost()
  }

  return (
    <div className='admin'>
      <Suspense fallback={<Loading />}>
        {posts.length > 0
          ? posts.map(post => (
            <PostAdmin key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              homeTeam={post.home_team}
              awayTeam={post.away_team}
              homeScore={post.home_score}
              awayScore={post.away_score}
              imageUrl={post.image_url}
              onDelete={() => handleDelete(post.id)}
              onUpdate={() => openModal(post)}
            />
          ))
          : <EmptyState />}
        <Button text={'Create Post'} onClick={() => openModal()} />
        <ModalForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={(e) => savePost(e)}
          handleChange={handleChange}
          post={values}
          isUpdate={isUpdate}
        />
      </Suspense>
    </div>
  )
}

export default Admin
