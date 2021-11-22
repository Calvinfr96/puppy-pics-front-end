import React, {useState, useEffect} from 'react'
import Dog from './Dog';
import { useParams } from 'react-router';

function BreedDetail({baseURL, user}) {
    const {id} = useParams()
    const [breed, setBreed] = useState({
        name: "",
        dogs: []
    })
    useEffect(() => {
        fetchBreed()
    }, [baseURL])

    const fetchBreed = async () => {
        const data = await fetch(`${baseURL}/breeds/${id}`)
        const breed = await data.json()
        setBreed(breed)
    }

    const dogComponents = breed.dogs.map(dog => {
        return <Dog key={dog.id} dog={dog} user={user} fetchData={fetchBreed} baseURL={baseURL} />
    })
    
    return (
        <div className="dog-container">
            {dogComponents}
        </div>
    )
}

export default BreedDetail;