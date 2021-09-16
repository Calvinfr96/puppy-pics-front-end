import React, {useState} from 'react'

function NewBreedForm() {
    const baseURL = "https://desolate-waters-34836.herokuapp.com"
    const [formData, setFormData] = useState({
        name: ""
    })
    const [errors, setErrors] = useState(null)

    function handleChange(event) {
        const name = event.target.name
        let value = event.target.value

        setFormData({
            ...formData,
            [name]:value
        })
    }

    const addUser = async () => {
        const configObj = {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                ...formData
            })
        }

        const data = await fetch(`${baseURL}/breeds`, configObj)
        const newBreed = await data.json()
        setErrors(newBreed.errors)
    }

    function handleSubmit(event) {
        event.preventDefault()
        addUser()
        setFormData({
            name: ""
        })
    }

    return (
        <div>
            <h1>Add New Breed</h1>
            <form onSubmit={handleSubmit}>
                <h3>Name:</h3>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Breed..." required></input>
                <button type="submit" className="submit">Add</button>
                {errors ? <h3 className="error">{`Breed ${errors.name[0]}`}</h3> : null}
            </form>
        </div>
    )
}

export default NewBreedForm;