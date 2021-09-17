import React, {useState, useEffect} from 'react'
import Dog from './Dog'

function UserDetail({currentUser}) {
    const baseURL = "https://desolate-waters-34836.herokuapp.com"
    const [user, setUser] = useState({
        name: "",
        liked_dogs: []
    })
    useEffect(() => {
        fetchDogs()
    }, [baseURL])

    const fetchDogs = async () => {
        const data = await fetch(`${baseURL}/users/${currentUser.id}`)
        const user = await data.json()
        setUser(user)
    }

    const dogComponents = user.liked_dogs.map(dog => {
        return <Dog key={dog.id} dog={dog} />
    })

    return (
        <div>
            <h1>{`${user.name}'s Liked Dogs`}</h1>
            <div className = "dog-container">
                {dogComponents}
            </div>
        </div>
    )
}

export default UserDetail;