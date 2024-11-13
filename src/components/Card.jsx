import {useSelector} from 'react-redux'

function Card(){
    const user = useSelector((state) => state.user)
 return(
   <div className='card'>
    <h2>Name: {user.name}</h2>
    <p>Username: {user.login}</p>
    <p>Followers: {user.followers}</p>
    <p>Public Repositories {user.publicrepos}</p>
    <img src={user.avatar_url} alt={user.name} />
   </div>
 )
}

export default Card