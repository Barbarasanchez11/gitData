import { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import axios from 'axios';
import "./App.css";
import { addUser,  searchUser } from './redux/userSlice.js'
import Card from './components/Card.jsx';

function App() {
  const dispatch = useDispatch()
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  const [axios,setAxios] = useState(false)
  const [search,setSearch] = useState([])


  const handleUser = (e) => {
    e.preventDefault()
    fetchUser()
  }

  const handleAddUser = () => {
    if(user) {
      dispatch(addUser({id: user, text: user}))
      setUser('')
    }
  }

  useEffect(() => {
    const fetchUser  = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://api.github.com/users/${user}`); 
        const data = response.data; 
        setUser ({
          name: data.name,
          login: data.login,
          followers: data.followers,
          publicrepos: data.repos_url,
          avatar_url: data.avatar_url,
        });
      } catch (error) {
        setError(`Error fetching data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchUser (); 
  }, [user])


  return (
  <>
    <h1>Users </h1>
    <form onSubmit={handleUser}>
      <input type='text'
      placeholder='enter the user'
      value={user}
      onChange={(e) => setUser(e.target.value)}  />
      <button type='button' onClick={handleAddUser}>Add</button>
    </form>
    {!loading ? <Card  user={user}/> : ''}
  </>
  );

}
export default App
