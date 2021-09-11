import React from 'react'

function Dog() {
    return (
        <div className="dog-card">
            <h3>Nubby</h3>
            <img src="https://images.dog.ceo/breeds/affenpinscher/n02110627_11279.jpg" />
            <div className="rating">
                <button>👍</button>
                <span>10</span>
                <button>👎</button>
                <span>3</span>
            </div>
        </div>
    )
}

export default Dog;