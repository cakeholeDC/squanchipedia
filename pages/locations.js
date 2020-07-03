import React from 'react'
import Layout from '../components/Layout'
import Location from '../components/Location'


export default class Locations extends React.Component {
    state = {
        info: null,
        locations: null,
        page: 1,
    }

    componentDidMount(){
        console.log("ComponentDidMount")
        this.fetchLocations()
    }

    fetchLocations = () => {
        fetch("https://rickandmortyapi.com/api/location")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    info: json.info,
                    locations: json.results
                })
            })
    }

    render() {
        console.log(this.state)
        return (
            <Layout>
                <h1>Locations</h1>
                <ul>
                    { this.state.locations ? this.state.locations.map(char => <Location {...char}/>) : null }
                </ul>
            </Layout>
        )
    }
}