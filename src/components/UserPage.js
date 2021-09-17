import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function UserPage() {
    const baseURL = "https://desolate-waters-34836.herokuapp.com"
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchUsers()
    },[])

    const fetchUsers = async () => {
        const data = await fetch(`${baseURL}/users`)
        const users = await data.json()
        setUsers(users)
    }

    const userLinks = users.map(user => {
        return (
            <h1 key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
            </h1> 
        )  
    })

    return (
        <div>
            <h1>Current Users</h1>
            {userLinks}
        </div>
    )
}


export default UserPage;