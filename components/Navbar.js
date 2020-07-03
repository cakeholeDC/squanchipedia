import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Header(){
    return(
        <Navbar bg="secondary" variant="light" sticky="top">
        <Link href="/">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Squanchipedia
            </Navbar.Brand>
        </Link>
        <Link href="/characters">
            <Nav.Link href="/characters">Characters</Nav.Link>
        </Link>
        <Link href="/locations">
            <Nav.Link href="/locations">Locations</Nav.Link>
        </Link>
        <Link href="/episodes">
            <Nav.Link href="/episodes">Episodes</Nav.Link>
        </Link>
    </Navbar>
        // <div id="header-bar">
        //     <Link href="/"><h1>Squanchipedia</h1></Link>
        //     <nav>
        //         <ul>
        //             {/* <li><Link href="/"><a>Home</a></Link></li> */}
        //             {/* <li><Link href="/rick"><a>Rick</a></Link></li> */}
        //             {/* <li><Link href="/morty"><a>Morty</a></Link></li> */}
        //             <li><Link href="/characters"><a>Characters</a></Link></li>
        //             <li><Link href="/locations"><a>Locations</a></Link></li>
        //             <li><Link href="/episodes"><a>Episodes</a></Link></li>
        //             {/* <li><Link href="/about"><a>About</a></Link></li> */}
        //         </ul>
        //     </nav>
        // </div>
    )
}