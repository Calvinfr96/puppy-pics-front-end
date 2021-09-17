import React, {useState, useEffect} from 'react'
import Dog from './Dog'

function ProfilePage({currentUser}) {
    const baseURL = "https://desolate-waters-34836.herokuapp.com"
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
        const data = await fetch(`${baseURL}/users/${currentUser.id}`)
        const user = await data.json()
        setUser(user)
    }

    const dogComponents = user.liked_dogs.map(dog => {
        return <Dog key={dog.id} dog={dog} />
    })

    const profilePage = currentUser ?
    (
        <div>
            <h1>{`${user.name}'s Liked Dogs`}</h1>
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

export default ProfilePage;