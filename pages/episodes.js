import React from 'react'
import Layout from '../components/Layout'
import Episode from '../components/Episode'


export default class Episodes extends React.Component {
    state = {
        info: null,
        episodes: null,
        page: 1,
    }

    componentDidMount(){
        console.log("ComponentDidMount")
        this.fetchEpisodes()
    }

    fetchEpisodes = () => {
        fetch("https://rickandmortyapi.com/api/episode")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    info: json.info,
                    episodes: json.results
                })
            })
    }

    render() {
        console.log(this.state)
        return (
            <Layout>
                <h1>Episodes</h1>
                <ul>
                    { this.state.episodes ? this.state.episodes.map(char => <Episode {...char}/>) : null }
                </ul>
            </Layout>
        )
    }
}