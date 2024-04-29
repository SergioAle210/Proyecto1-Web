import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: 'localhost',
  user: 'sergio',
  database: 'blog_sergio',
  password: 'serch',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

export default pool
