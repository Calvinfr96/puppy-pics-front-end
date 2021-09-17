import React, {useState, useEffect} from 'react'

function LogInPage({setUser}) {
    const baseURL = "https://desolate-waters-34836.herokuapp.com"
    const [users, setUsers] = useState([])
    const [formData, setFormData] = useState({
        name: ""
    })

    useEffect(() => {
        fetchUsers()
    },[])

    const fetchUsers = async () => {
        const data = await fetch(`${baseURL}/users`)
        const users = await data.json()
        setUsers(users)
    }

    function handleChange(event) {
        const name = event.target.name
        let value = event.target.value

        setFormData({
            ...formData,
            [name]:value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setFormData({
            name: ""
        })
    }
    
    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <h3>Username:</h3>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name..." required></input>
                <button type="submit" className="submit">Log In</button>
            </form> 
        </div>
    )
}

export default LogInPage;