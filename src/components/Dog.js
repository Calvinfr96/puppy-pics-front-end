import React from 'react'

function Dog({dog, user, ratings, setRatings}) {
    const baseURL = "https://desolate-waters-34836.herokuapp.com"

    const createRating = async (rating) => {
        const configObj = {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                user_id : user.id,
                dog_id : dog.id,
                "good_boy?" : rating
            })
        }

        const data = await fetch(`${baseURL}/ratings`, configObj)
        const newRating = await data.json()
        setRatings([...ratings, newRating])
    }

    const editRating = async (rating, userRating) => {
        const id = userRating.id
        
        const configObj = {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                ...userRating,
                "good_boy?" : rating
            })
        }

        const data = await fetch(`${baseURL}/ratings/${id}`, configObj)
        const newRating = await data.json()
        const updatedRatings = ratings.map(rating => {
            if (rating.id === newRating.id) {
                return newRating
            } else {
                return rating
            }
        })
        setRatings(updatedRatings)
    }

    function like() {
        if (user) {
            const rating = ratings.filter(rating => rating.user_id === user.id && rating.dog_id === dog.id)[0]
            if (rating) {
                editRating(true, rating)
            } else {
                createRating(true)
            }
        } else {
            alert("Please log in to like user")
        }
    }

    function dislike() {
        if (user) {
            const rating = ratings.filter(rating => rating.user_id === user.id && rating.dog_id === dog.id)[0]
            if (rating) {
                editRating(false, rating)
            } else {
                createRating(false)
            }
        } else {
            alert("Please log in to like user")
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