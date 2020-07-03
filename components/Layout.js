import styles from './layout.module.css'
import Header from './Header'

// function Layout({ children }) {
//     return <div className={ styles.container}>{children}</div>
// }
  
// export default Layout
  
const Layout = (props) => (
    <div className="app-body">
        <Header />
        <div className="content">
            { props.children }
        </div>
    </div>
)

export default Layout