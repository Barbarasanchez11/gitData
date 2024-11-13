import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import "./App.css";
import { addUser } from './redux/userSlice.js';
import Card from './components/Card.jsx';

function App() {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUser = (e) => {
    e.preventDefault();
    fetchUser(userInput);
  };

  const fetchUser = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      const data = response.data;
      const userData = {
        name: data.name,
        login: data.login,
        followers: data.followers,
        publicRepos: data.public_repos, 
        avatar: data.avatar_url, 
      };
      setUserData(userData);
      dispatch(addUser(userData)); 
    } catch (error) {
      setError(`Error fetching data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Users</h1>
      <form onSubmit={handleUser}>
        <input
          type='text'
          placeholder='Enter the user'
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type='submit'>Search</button> 
      </form>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>} 
      {!loading && userData && 
        <>
          <Card user={userData} /> 
        </>
      }
    </>
  );
}

export default App;
