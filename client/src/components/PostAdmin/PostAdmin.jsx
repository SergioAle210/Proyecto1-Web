import PropTypes from 'prop-types'

import Button from '@components/Button'

import './PostAdmin.css'

const PostAdmin = ({ id, title, content, home_team, away_team, home_score, away_score, image_url, onDelete, onUpdate }) => (
  <div className="post">
    <h1>{title}</h1>
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

PostAdmin.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  home_team: PropTypes.string,
  away_team: PropTypes.string,
  home_score: PropTypes.number,
  away_score: PropTypes.number,
  image_url: PropTypes.string,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
}

export default PostAdmin
