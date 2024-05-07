import PropTypes from 'prop-types'
import React from 'react'

import './Post.css'

const Post = ({ id, title, content, homeTeam, awayTeam, homeScore, awayScore, imageUrl }) => (
  <div className="post">
    <h1 key={id}>{title}</h1>
    <p>{content}</p>
    <div className="scores">
      <span className="team-name">{homeTeam}</span>
      <span className="score">{homeScore}</span>
      <span className="vs">vs</span>
      <span className="score">{awayScore}</span>
      <span className="team-name">{awayTeam}</span>
    </div>
    <img src={imageUrl} alt={title} className="post-image"/>
  </div>
)

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  homeTeam: PropTypes.string.isRequired,
  awayTeam: PropTypes.string.isRequired,
  homeScore: PropTypes.number.isRequired,
  awayScore: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired
}

export default Post
