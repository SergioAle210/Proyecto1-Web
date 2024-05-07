import PropTypes from 'prop-types'

import React, { useEffect, useState } from 'react'
import Button from '@components/Button'
import Input from '@components/Input'

import './ModalForm.css'

const ModalForm = ({ isOpen, onClose, onSubmit, post, isUpdate }) => {
  const [formData, setFormData] = useState({
    title: post?.title || '',
    content: post?.content || '',
    homeTeam: post?.homeTeam || '',
    awayTeam: post?.awayTeam || '',
    homeScore: post?.homeScore || 0,
    awayScore: post?.awayScore || 0,
    imageUrl: post?.imageUrl || ''
  })

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title || '',
        content: post.content || '',
        homeTeam: post.homeTeam || '',
        awayTeam: post.awayTeam || '',
        homeScore: post.homeScore || 0,
        awayScore: post.awayScore || 0,
        imageUrl: post.imageUrl || ''
      })
    } else {
      setFormData({
        title: '',
        content: '',
        homeTeam: '',
        awayTeam: '',
        homeScore: 0,
        awayScore: 0,
        imageUrl: ''
      })
    }
  }, [post])

  const handleChange = (name, value) => {
    // Manejar directamente el cambio de los valores basado en el nombre y valor
    setFormData(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitting form with data:', formData)
    onSubmit(formData)
    onClose() // Close the modal on submit
  }

  if (!isOpen) return null

  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close-button' onClick={onClose}>&times;</span>
        <form onSubmit={(e) => handleSubmit(e)}>
        <Input label='Title' type='text' name='title' value={formData.title} onChange={(value) => handleChange('title', value)} />
          <Input label='Content' type='textarea' name='content' value={formData.content} onChange={(value) => handleChange('content', value)} />
          <Input label='Home Team' type='text' name='homeTeam' value={formData.homeTeam} onChange={(value) => handleChange('homeTeam', value)} />
          <Input label='Away Team' type='text' name='awayTeam' value={formData.awayTeam} onChange={(value) => handleChange('awayTeam', value)} />
          <Input label='Home Score' type='number' name='homeScore' value={formData.homeScore} onChange={(value) => handleChange('homeScore', value)} />
          <Input label='Away Score' type='number' name='awayScore' value={formData.awayScore} onChange={(value) => handleChange('awayScore', value)} />
          <Input label='Image URL' type='text' name='imageUrl' value={formData.imageUrl} onChange={(value) => handleChange('imageUrl', value)} />
          <Button type='submit' text={isUpdate ? 'Update Post' : 'Create Post'} />
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
    homeTeam: PropTypes.string,
    awayTeam: PropTypes.string,
    homeScore: PropTypes.number,
    awayScore: PropTypes.number,
    imageUrl: PropTypes.string
  }),
  isUpdate: PropTypes.bool
}

export default ModalForm
