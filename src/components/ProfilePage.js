import React, {useState, useEffect} from 'react'

function ProfilePage({currentUser, setCurrentUser, baseURL}) {
    const [user, setUser] = useState({
        name: "",
        liked_dogs: []
    })
    useEffect(() => {
        if (currentUser) {
            fetchDogs()
        }
    }, [baseURL])

    const fetchDogs = async () => {
        const token = localStorage.getItem('token')
        const configObj = {
            method: "GET",
            headers: {
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        const data = await fetch(`${baseURL}/users/${currentUser.id}`, configObj)
        const user = await data.json()
        setUser(user)
    }

    const deleteUser = async () => {
        const token = localStorage.getItem('token')
        const configObj = {
            method: "GET",
            headers: {
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        await fetch(`${baseURL}/users/${currentUser.id}`, {method: "DELETE"}, configObj)
        setCurrentUser(null)
        localStorage.removeItem('token')
        history.push('/')
    }

    const dogComponents = user.liked_dogs.map(dog => {
        return <ProfileDog key={dog.id} dog={dog} />
    })

    const profilePage = currentUser ?
    (
        <div className="profile-page">
            <h1>{`${user.name}'s Liked Dogs`}</h1>
            <button className="delete-button" onClick={deleteUser}>Delete Profile</button>
            <div className = "dog-container">
                {dogComponents}
            </div>
        </div>
    ) : 
    (
        <h1>Please Log In</h1>
    )

    return (
        <div>
            {profilePage}
        </div>
    )
}

function ProfileDog({dog}) {
    return(
        <div className="dog-card">
        <h3>{dog.name}</h3>
        <img alt={dog.name} src={dog.image_url} />
        </div>
    )
}

export default ProfilePage;