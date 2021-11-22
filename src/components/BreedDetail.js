import React, {useState, useEffect} from 'react'
import Dog from './Dog';
import DogsContainer from './DogsContainer';
import { useParams } from 'react-router';

function BreedDetail({baseURL, user}) {
    const {id} = useParams()
    console.log(id)
    const [breed, setBreed] = useState({
        name: "",
        dogs: []
    })
    useEffect(() => {
        fetchDogs()
    }, [baseURL])

    const fetchDogs = async () => {
        const data = await fetch(`${baseURL}/breeds/${id}`)
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