import React, {useEffect, useState} from 'react'
import Dog from './Dog';
import Header from './Header';

function DogsContainer({currentUser, baseURL, heading}) {
    const [dogs, setDogs] = useState([])

    const fetchAllDogs = async () => {
        const data = await fetch(`${baseURL}/dogs`)
        const dogs = await data.json()
        setDogs(dogs)
      }

    useEffect(() => {
        fetchAllDogs()
    }, [])

    const dogComponents = dogs.map(dog => {
        return <Dog key={dog.id} dog={dog} user={currentUser} fetchData={fetchAllDogs} baseURL={baseURL} />
    })

    return (
        <div>
            <Header heading={heading} />
            {currentUser ? null : <h2>Please log in</h2>}
            <div className = "dog-container">
                {dogComponents}
            </div>
        </div>
    )
}

export default DogsContainer;