import styles from './layout.module.css'
import Header from './Header'
import Container from 'react-bootstrap/Container'

// function Layout({ children }) {
//     return <div className={ styles.container}>{children}</div>
// }
  
// export default Layout
  
const Layout = (props) => (
    <>
    <Header />
    <Container fluid className="app-body">
        <div className="app-content">
            { props.children }
        </div>
    </Container>
    </>
)

export default Layout