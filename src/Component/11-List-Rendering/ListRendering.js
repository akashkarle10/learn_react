import React from 'react'
import PersonDetails from './PersonDetails'

function ListRendering() {
    // const names = ['Akash', 'Mahesh', 'Rohit']
    // const nameList = names.map(mynames => <h2 key={mynames.index}>{mynames}</h2>)
    // return (<div>{nameList}</div>)

    const person=[
        {
            id:1,
            name:'Akash',
            age:22,
            skill:'React'
        },
        {
            id:2,
            name:'Mahesh',
            age:22,
            skill:'Python'
        },
        {
            id:3,
            name:'Rohit',
            age:22,
            skill:'Angular'
        }
    ]

    const personList = person.map(personDetails  => <PersonDetails key={personDetails.index} personDetails={personDetails}/> )
    return (<div>{personList}</div>)
}

export default ListRendering