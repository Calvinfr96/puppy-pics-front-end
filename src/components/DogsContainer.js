import React, {useEffect, useState} from 'react'
import Dog from './Dog';

function DogsContainer() {
    const baseURL = "https://desolate-waters-34836.herokuapp.com"
    const [dogs, setDogs] = useState([])
    useEffect(() => {
        fetchAllDogs()
    }, [baseURL])

    const fetchAllDogs = async () => {
        const data = await fetch(`${baseURL}/dogs`)
        const dogs = await data.json()
        setDogs(dogs)
    }

    const dogComponents = dogs.map(dog => {
        return <Dog key={dog.id} dog={dog} />
    })
    return (
        <div className = "dog-container">
            {dogComponents}
        </div>
    )
}

export default DogsContainer;