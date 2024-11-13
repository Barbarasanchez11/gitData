function Card({ user }) {
    return (
        <div className='card'>
            <h2>Name: {user.name}</h2>
            <p>Username: {user.login}</p>
            <p>Followers: {user.followers}</p>
            <p>Public Repositories: {user.publicRepos}</p>
            <img src={user.avatar} alt={user.name} />
        </div>
    );
}

export default Card;