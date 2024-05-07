// eslint-disable-next-line import/no-extraneous-dependencies
import jwt from 'jsonwebtoken'

const SECRET = 'tiburoncinhuhaha-jambalaya'

// eslint-disable-next-line arrow-body-style
const generateToken = (user) => {
  return jwt.sign(user, SECRET, {
    expiresIn: '1h',
    algorithm: 'HS256'
  })
}

const validateToken = (token) => {
  try {
    return jwt.verify(token, SECRET)
  // eslint-disable-next-line padded-blocks
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Invalid token', e)
    return false
  }
}

export { generateToken, validateToken }
