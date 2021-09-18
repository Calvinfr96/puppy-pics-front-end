import React, {useEffect, useState} from 'react'
import Dog from './Dog';
import Header from './Header';

function DogsContainer({currentUser, baseURL}) {
    const [dogs, setDogs] = useState([])
    const [ratings, setRatings] = useState([])

    useEffect(() => {
        fetchAllDogs()
    }, [ratings])

    const fetchAllDogs = async () => {
        const data = await fetch(`${baseURL}/dogs`)
        const dogs = await data.json()
        setDogs(dogs)
    }

    const dogComponents = dogs.map(dog => {
        return <Dog key={dog.id} dog={dog} user={currentUser} ratings={ratings} setRatings={setRatings} baseURL={baseURL} />
    })

    const fetchRatings = async () => {
        const data = await fetch(`${baseURL}/ratings`)
        const allRatings = await data.json()
        setRatings(allRatings)
    }

    useEffect(() => {
        fetchRatings()
    },[])

    return (
        <div>
            <Header />
            {currentUser ? null : <h2>Please log in</h2>}
            <div className = "dog-container">
                {dogComponents}
            </div>
        </div>
    )
}

export default DogsContainer;