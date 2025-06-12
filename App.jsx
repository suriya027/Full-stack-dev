import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/message')
      .then(res => setMessage(res.data.message))
      .catch(err => {
        console.error('❌ Error:', err.message);
        setMessage('❌ Could not reach backend');
      });
  }, []);

  return (
    <div style={{ padding: '2rem', color: 'white', backgroundColor: '#121212', height: '100vh' }}>
      <h1>Frontend</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
