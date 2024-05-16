import React, { useState, useEffect } from 'react';
import './App.css'; 

const App = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

 
  const data = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
    { id: 4, name: 'David', email: 'david@example.com' },
  ];

  useEffect(() => {
        const timer = setTimeout(() => {
      setLoading(false);
      setUsers(data); 
      console.log('UserList component mounted');
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="user-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <span className="user-name">{user.name}</span>
              <span className="user-email">{user.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
