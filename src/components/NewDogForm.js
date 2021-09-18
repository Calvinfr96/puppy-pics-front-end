import React, {useState, useEffect} from 'react'

function NewDogForm({baseURL}) {
    const [breeds, setBreeds] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        breed_id: "",
        image_url: ""
    })
    const [errors,setErrors] = useState(null)

    useEffect(() => {
        fetchAllBreeds()
    }, [])

    function handleChange(event) {
        const name = event.target.name
        let value = event.target.value

        setFormData({
            ...formData,
            [name]:value
        })
    }

    const fetchAllBreeds = async () => {
        const data = await fetch(`${baseURL}/breeds`)
        const breeds = await data.json()
        setBreeds(breeds)
    }

    const addDog = async () => {
        const configObj = {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                ...formData,
                breed_id: parseInt(formData.breed_id)
            })
        }

        const data = await fetch(`${baseURL}/dogs`, configObj)
        const newDog = await data.json()
        setErrors(newDog.errors)
    }

    function handleSubmit(event) {
        event.preventDefault()
        addDog()
        setFormData({
            name: "",
            breed_id: "",
            image_url: ""
        })
    }

    const options = breeds.map((breed) => {
        return <option key={breed.id} value={breed.id}>{breed.name}</option>
    })

    return (
        <div>
            <h1>Add New Dog</h1>
            <form onSubmit={handleSubmit}>
                <h3>Name:</h3>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name..." required></input>
                <h3>Breed:</h3>
                <select name="breed_id" value={formData.breed_id} onChange={handleChange} required>
                    <option value="" disabled>Select Breed</option>
                    {options}
                </select>
                <h3>Image:</h3>
                <input type="text" name="image_url" value={formData.image_url} onChange={handleChange} placeholder="Image URL..." required></input>
                <button type="submit" className="submit">Add</button>
                {errors ? <h3 className="error">{`Image ${errors.image_url[0]}`}</h3> : null}
            </form>
        </div>
    )
}

export default NewDogForm;