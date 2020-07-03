import React from 'react'
import Layout from '../components/Layout'
import Character from '../components/Character'
import { Card } from 'semantic-ui-react'


export default class Characters extends React.Component {
    state = {
        characters: null,
        page: 1,
    }

    componentDidMount(){
        this.fetchCharacters()
    }

    fetchCharacters = () => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(json => this.setState({
                    characters: json.results
                })
            )
    }

    render() {
        return (
            <Layout>
                <h1>Characters</h1>
                <Card.Group itemsPerRow={4}>
                    { this.state.characters ? this.state.characters.map(char => <Character {...char}/>) : null }
                </Card.Group>
            </Layout>
        )
    }
}