import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

function Dog({dog, user, fetchData, baseURL}) {
    const [dogData, setDogData] = useState(dog)
    const history = useHistory()
    const createRating = async (rating) => {
        const token = localStorage.getItem('token')
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                user_id : user.id,
                dog_id : dog.id,
                "good_boy?" : rating
            })
        }

        await fetch(`${baseURL}/ratings`, configObj)
    }

    const fetchDog = async () => {
        const token =  localStorage.getItem('token')
        const configObj = {
            method: "GET",
            headers: {
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
        }
    
        if (token) {
          const data = await fetch(`${baseURL}/dogs/${dog.id}`, configObj)
          const updatedDog = await data.json()
          setDogData(updatedDog)
        }
      }

    function like() {
        if (user) {
            createRating(true)
            fetchData()
            history.go(0)
        } else {
            history.push('/login')
        }
    }

    function dislike() {
        if (user) {
            createRating(false)
            fetchData()
            history.go(0)
        } else {
            history.push('/login')
        }
    }

    return (
        <div className="dog-card">
            <h3>{dog.name}</h3>
            <img alt={dog.name} src={dog.image_url} />
            <div className="rating">
                <button onClick={like}>👍</button>
                <span>{dogData.likes}</span>
                <button onClick={dislike}>👎</button>
                <span>{dogData.dislikes}</span>
            </div>
        </div>
    )
}

export default Dog;