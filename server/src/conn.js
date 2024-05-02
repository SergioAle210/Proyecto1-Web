import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: 'localhost',
  user: 'sergio',
  database: 'basketball_blog_db',
  password: 'serch',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

export default pool
