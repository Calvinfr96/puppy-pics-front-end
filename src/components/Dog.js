import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

function Dog({dog, user, baseURL}) {
    const [likes, setLikes] = useState(dog.likes)
    const [dislikes, setDislikes] = useState(dog.dislikes)
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

        const data = await fetch(`${baseURL}/ratings`, configObj)
        const updatedDog = await data.json()
        setLikes(updatedDog.updated_dog.likes)
        setDislikes(updatedDog.updated_dog.dislikes)
    }

    function like() {
        if (user) {
            createRating(true)
        } else {
            history.push('/login')
        }
    }

    function dislike() {
        if (user) {
            createRating(false)
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
                <span>{likes}</span>
                <button onClick={dislike}>👎</button>
                <span>{dislikes}</span>
            </div>
        </div>
    )
}

export default Dog;