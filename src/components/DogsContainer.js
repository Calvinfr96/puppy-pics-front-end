import React, {useEffect, useState} from 'react'
import Dog from './Dog';

function DogsContainer() {
    const baseURL = "https://desolate-waters-34836.herokuapp.com"
    const [dogs, setDogs] = useState([])
    useEffect(() => {
        fetch(`${baseURL}/dogs`)
            .then(resp => resp.json())
            .then(data => setDogs(data))
    }, [baseURL])

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