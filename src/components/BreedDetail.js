import React, {useState, useEffect} from 'react'
import Dog from './Dog';
import DogsContainer from './DogsContainer';

function BreedDetail({match, baseURL, user}) {
    const [breed, setBreed] = useState({
        name: "",
        dogs: []
    })
    useEffect(() => {
        fetchDogs()
    }, [baseURL])

    const fetchDogs = async () => {
        const data = await fetch(`${baseURL}/breeds/${match.params.id}`)
        const breed = await data.json()
        setBreed(breed)
    }

    const dogComponents = breed.dogs.map(dog => {
        return <Dog key={dog.id} dog={dog} />
    })
    
    return (
        <div>
            <DogsContainer dogs={breed.dogs} fetchDogs={fetchDogs} currentUser={user} baseURL={baseURL} heading={breed.name} />
        </div>
    )
}

export default BreedDetail;