import React from 'react'
import Card from 'react-bootstrap/Card'

export default class Character extends React.Component {
    
    getSpecies = () => {
        if (this.props.type) {
            return `${this.props.species} - ${this.props.type}`
        } else {
            return this.props.species
        }
    }

    formatLocation = () => {
        return `Location: ${this.props.location.name}`
    }

    render() {
        console.log(`Character.render(${this.props.id})`, this.props)
        return (
            <li>{this.props.name}</li>

            // // BOOTSTRAP
            // <Card>
            //     <Card.Img variant="top" src={ this.props.image } />
            //     <Card.Body>
            //         <Card.Title>{ this.props.name }</Card.Title>
            //         <Card.Text>
            //         { this.formatLocation() }
            //         </Card.Text>
            //     </Card.Body>
            //     <Card.Footer>
            //         { this.getSpecies() }
            //     </Card.Footer>
            // </Card>

            // LEGACY: semantic
            // <Card
            //     className="character-card"
            //     image={this.props.image}
            //     header={this.props.name}
            //     meta={this.props.status}
            //     description={this.formatLocation()}
            //     extra={this.getSpecies()}
            // />
        )
    }
}
// export default Character