import useNavigate from '@hooks/useNavigate'

import './Nav.css'

const Nav = () => {
  const { page, navigate, isLoggedIn } = useNavigate()

  const handleClick = (e, newPath) => {
    e.preventDefault();
    navigate(newPath);
  }

  return (
    <nav>
      <ul className="nav-list">
        {isLoggedIn ? (
          <>
            <li className={page === '/' ? 'active' : ''}>
              <a href="/" onClick={(e) => handleClick(e, '/')}>Home</a>
            </li>
            <li className={page === '/admin' ? 'active' : ''}>
              <a href="/admin" onClick={(e) => handleClick(e, '/admin')}>Admin</a>
            </li>
            <li>
              <a href="/logout" onClick={(e) => {
                localStorage.removeItem('access_token'); // Ensure to clean the token
                handleClick(e, '/');
              }}>Logout</a>
            </li>
          </>
        ) : (
          <>
            <li className={page === '/' ? 'active' : ''}>
              <a href="/" onClick={(e) => handleClick(e, '/')}>Home</a>
            </li>
            <li className={page === '/login' ? 'active' : ''}>
              <a href="/login" onClick={(e) => handleClick(e, '/login')}>Login</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Nav
