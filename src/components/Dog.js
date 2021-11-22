import React from 'react'
import {useHistory} from 'react-router-dom'

function Dog({dog, user, fetchData, baseURL}) {
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
                <span>{dog.likes}</span>
                <button onClick={dislike}>👎</button>
                <span>{dog.dislikes}</span>
            </div>
        </div>
    )
}

export default Dog;