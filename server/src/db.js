import pool from './conn.js'

// Obtener todos los posts
export async function getAllPosts() {
  const [rows] = await pool.query('SELECT * FROM blog_posts')
  return rows
}

// Crear un nuevo post
export async function createPost(
  title,
  content,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  imageUrl,
) {
  const [result] = await pool.query(
    'INSERT INTO blog_posts (title, content, home_team, away_team, home_score, away_score, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [title, content, homeTeam, awayTeam, homeScore, awayScore, imageUrl],
  )
  return result
}

// Obtener un post individual por ID
export async function getPostById(postId) {
  const [rows] = await pool.query('SELECT * FROM blog_posts WHERE id = ?', [postId])
  return rows[0]
}

// Actualizar un post existente
export async function updatePost(
  postId,
  title,
  content,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  imageUrl,
) {
  const [result] = await pool.query(
    'UPDATE blog_posts SET title = ?, content = ?, home_team = ?, away_team = ?, home_score = ?, away_score = ?, image_url = ? WHERE id = ?',
    [title, content, homeTeam, awayTeam, homeScore, awayScore, imageUrl, postId],
  )
  return result
}

// Borrar un post
export async function deletePost(postId) {
  const [result] = await pool.query('DELETE FROM blog_posts WHERE id = ?', [postId])
  return result
}

export async function login(user, passwordMd5) {
  const [rows] = await pool.query('SELECT id FROM users WHERE user = ? AND password = ?', [user, passwordMd5])
  if (rows.length === 1) {
    return rows[0].id
  }
  return false
}

export async function register(user, passwordMd5) {
  const [result] = await pool.query('INSERT INTO users (user, password) VALUES (?, ?)', [user, passwordMd5])
  return result
}
