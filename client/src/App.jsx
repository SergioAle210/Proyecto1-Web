import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blog from '@pages/Blog'
import Login from '@pages/Login'
import Admin from '@pages/Admin'
import PrivateRoute from '@components/PrivateRoute'
import Nav from '@components/Nav'
import Header from '@components/Header'
import Footer from '@components/Footer'

import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
