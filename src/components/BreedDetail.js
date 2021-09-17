import React, {useState, useEffect} from 'react'
import Dog from './Dog';

function BreedDetail({match}) {
    const baseURL = "https://desolate-waters-34836.herokuapp.com"
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
            <h1>{breed.name}</h1>
            <div className = "dog-container">
                {dogComponents}
            </div>
        </div>
    )
}

export default BreedDetail;