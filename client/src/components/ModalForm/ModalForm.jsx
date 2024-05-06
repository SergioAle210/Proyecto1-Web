import PropTypes from 'prop-types'

import { useEffect, useState } from 'react'

import './ModalForm.css'

const ModalForm = ({ isOpen, onClose, onSubmit, post, isUpdate }) => {
  const [formData, setFormData] = useState({
    title: post?.title || '',
    content: post?.content || '',
    homeTeam: post?.home_team || '',
    awayTeam: post?.away_team || '',
    homeScore: post?.home_score || 0,
    awayScore: post?.away_score || 0,
    imageUrl: post?.image_url || '',
  })

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title || '',
        content: post.content || '',
        homeTeam: post.home_team || '',
        awayTeam: post.away_team || '',
        homeScore: post.home_score || 0,
        awayScore: post.away_score || 0,
        imageUrl: post.image_url || '',
      })
    }
  }, [post])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    onClose() // Close the modal on submit
  }

  if (!isOpen) return null

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Title: <input type="text" name="title" value={formData.title} onChange={handleChange} required /></label>
          <label>Content: <textarea name="content" value={formData.content} onChange={handleChange} required /></label>
          <label>Home Team: <input type="text" name="homeTeam" value={formData.homeTeam} onChange={handleChange} required /></label>
          <label>Away Team: <input type="text" name="awayTeam" value={formData.awayTeam} onChange={handleChange} required /></label>
          <label>Home Score: <input type="number" name="homeScore" value={formData.homeScore} onChange={handleChange} required /></label>
          <label>Away Score: <input type="number" name="awayScore" value={formData.awayScore} onChange={handleChange} required /></label>
          <label>Image URL: <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required /></label>
          <button type="submit">{isUpdate ? 'Update Post' : 'Create Post'}</button>
        </form>
      </div>
    </div>
  )
}

ModalForm.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    post: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      home_team: PropTypes.string,
      away_team: PropTypes.string,
      home_score: PropTypes.number,
      away_score: PropTypes.number,
      image_url: PropTypes.string,
    }),
    isUpdate: PropTypes.bool
  }

export default ModalForm
