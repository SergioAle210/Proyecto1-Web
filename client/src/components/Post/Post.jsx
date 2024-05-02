import PropTypes from 'prop-types'
import './Post.css'

const Post = ({ title, body, home_team, away_team, home_score, away_score, image_url }) => (
  <div className="post">
    <h1>{title}</h1>
    <p>{body}</p>
    <div className="scores">
      <span className="team-name">{home_team}</span>
      <span className="score">{home_score}</span>
      <span className="vs">vs</span>
      <span className="score">{away_score}</span>
      <span className="team-name">{away_team}</span>
    </div>
    <img src={image_url} alt={title} className="post-image"/>
  </div>
)

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  home_team: PropTypes.string.isRequired,
  away_team: PropTypes.string.isRequired,
  home_score: PropTypes.number.isRequired,
  away_score: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired,
}

export default Post
