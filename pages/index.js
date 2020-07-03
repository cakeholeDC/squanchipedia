// import Head from 'next/head'
import Layout from '../components/Layout'
import { Jumbotron, Container } from 'react-bootstrap'

export default function Home() {
  return (
    <Layout>
      <Jumbotron fluid>
        <Container>
          <h1>Greetings <code>human</code> from <code>Earth C-137</code>!</h1>
          <p>
          Use the squanch bar to find the information you need, Morty.
          </p>
        </Container>
      </Jumbotron>
    </Layout>
  )
}
