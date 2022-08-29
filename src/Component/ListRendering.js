import React from 'react'

function ListRendering() {
    const names = ['Akash', 'Mahesh', 'Rohit']

    return (
        <div>
            {
                names.map(name => <h2>{name}</h2>)
            }
        </div>
    )
}

export default ListRendering