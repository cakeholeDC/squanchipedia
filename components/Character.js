import React from 'react'

export default function Character (props) {
    console.log(props)
    return (
        <h1>{props.name}</h1>
    )
}