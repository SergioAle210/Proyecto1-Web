import PropTypes from 'prop-types'
import React from 'react'

import Button from '@components/Button'

import './PostAdmin.css'

const PostAdmin = ({ id, title, content, homeTeam, awayTeam, homeScore, awayScore, imageUrl, onDelete, onUpdate }) => (
  <div className="post">
    <h1>{title}</h1>
    <p>{content}</p>
    <div className="scores">
      <span className="team-name">{homeTeam}</span>
      <span className="score">{homeScore}</span>
      <span className="vs">vs</span>
      <span className="score">{awayScore}</span>
      <span className="team-name">{awayTeam}</span>
    </div>
    <img src={imageUrl} alt={title} className="post-image"/>
    <div>
        <Button text={'Update'} onClick={() => onUpdate(id)} />
        <Button text={'Delete'} onClick={() => onDelete(id)} />
    </div>
  </div>
)

PostAdmin.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  homeTeam: PropTypes.string,
  awayTeam: PropTypes.string,
  homeScore: PropTypes.number,
  awayScore: PropTypes.number,
  imageUrl: PropTypes.string,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func
}

export default PostAdmin
