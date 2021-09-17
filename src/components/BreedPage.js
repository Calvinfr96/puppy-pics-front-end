import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function BreedPage() {
    const baseURL = "https://desolate-waters-34836.herokuapp.com"
    const [breeds, setBreeds] = useState([])

    useEffect(() => {
        fetchBreeds()
    },[])

    const fetchBreeds = async () => {
        const data = await fetch(`${baseURL}/breeds`)
        const breeds = await data.json()
        setBreeds(breeds)
    }

    console.log(breeds)

    const breedLinks = breeds.map(breed => {
        return (
            <h1 key={breed.id}>
                <Link to={`breeds/${breed.id}`}>{breed.name}</Link>
            </h1> 
        )  
    })

    console.log(breedLinks)

    return (
        <div>
            <h1>View Dogs By Breed</h1>
            {breedLinks}
        </div>
    )
}

export default BreedPage;