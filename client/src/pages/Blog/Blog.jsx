import React, { useState, useEffect, Suspense } from 'react'
import './Blog.css'
import Post from '@components/Post'
import Loading from '@components/Loading'
import EmptyState from '@components/EmptyState'
import useApi from '@hooks/useApi'

const Blog = () => {
  const [posts, setPosts] = useState([])
  const { fetchData } = useApi()

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

  return (
    <div className="blog">
      <Suspense fallback={<Loading />}>
        {
        posts.length > 0
          ? posts.map(
            post =>
              (
                <Post key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                homeTeam={post.home_team}
                awayTeam={post.away_team}
                homeScore={post.home_score}
                awayScore={post.away_score}
                imageUrl={post.image_url}
                />
              )
          )
          : <EmptyState />}
      </Suspense>
    </div>
  )
}

export default Blog
