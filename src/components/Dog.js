import React from 'react'

function Dog({dog}) {
    return (
        <div className="dog-card">
            <h3>{dog.name}</h3>
            <img alt={dog.name} src={dog.image_url} />
            <div className="rating">
                <button>👍</button>
                <span>{dog.likes}</span>
                <button>👎</button>
                <span>{dog.dislikes}</span>
            </div>
        </div>
    )
}

export default Dog;