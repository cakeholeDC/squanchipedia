import Link from 'next/link'

export default function Header(){
    return(
        <div id="header-bar">
            <h1>Squanchipedia</h1>
            <nav>
                <ul>
                    {/* <li><Link href="/"><a>Home</a></Link></li> */}
                    {/* <li><Link href="/rick"><a>Rick</a></Link></li> */}
                    {/* <li><Link href="/morty"><a>Morty</a></Link></li> */}
                    <li><Link href="/characters"><a>Characters</a></Link></li>
                    <li><Link href="/locations"><a>Locations</a></Link></li>
                    <li><Link href="/episodes"><a>Episodes</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                </ul>
            </nav>
        </div>
    )
}