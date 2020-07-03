import React from 'react'

export default class Location extends React.Component {


    render() {
        console.log(`Location.render(${this.props.id})`, this.props)
        return (
            <li>{this.props.name}</li>
        )
    }
}