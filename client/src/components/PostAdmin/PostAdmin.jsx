import PropTypes from 'prop-types'

import Button from '@components/Button'

import './PostAdmin.css'

const Post = ({ id, title, content, home_team, away_team, home_score, away_score, image_url, onDelete, onUpdate }) => (
  <div className="post">
    <h1 key={id}>{title}</h1>
    <p>{content}</p>
    <div className="scores">
      <span className="team-name">{home_team}</span>
      <span className="score">{home_score}</span>
      <span className="vs">vs</span>
      <span className="score">{away_score}</span>
      <span className="team-name">{away_team}</span>
    </div>
    <img src={image_url} alt={title} className="post-image"/> 
    <div>
        <Button text={'Actualizar'} onClick={() => onUpdate(id)} />
        <Button text={'Eliminar'} onClick={() => onDelete(id)} />
    </div>
  </div>
)

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  home_team: PropTypes.string.isRequired,
  away_team: PropTypes.string.isRequired,
  home_score: PropTypes.number.isRequired,
  away_score: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
}

export default Post
