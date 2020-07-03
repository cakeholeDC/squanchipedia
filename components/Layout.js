import styles from './layout.module.css'
import Navbar from './Navbar'
import Container from 'react-bootstrap/Container'

// function Layout({ children }) {
//     return <div className={ styles.container}>{children}</div>
// }
  
// export default Layout
  
const Layout = (props) => (
    <>
    <Navbar />
    <Container fluid className="app-body">
        <div className="app-content">
            { props.children }
        </div>
    </Container>
    </>
)

export default Layout