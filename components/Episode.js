import React from 'react'

export default class Episode extends React.Component {


    render() {
        console.log(`Episode.render(${this.props.id})`, this.props)
        return (
            <li>{this.props.name}</li>
        )
    }
}