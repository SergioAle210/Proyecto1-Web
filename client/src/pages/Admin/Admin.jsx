import { useEffect, useState } from 'react';

function Admin() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:21122/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          {/* botones para editar y eliminar */}
        </div>
      ))}
    </div>
  );
}

export default Admin;
