import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='nav'>
        <a href='/' className='site-title'>Site Name</a>
        <ul>
            <li className="active">
                <a href='/pricing'>Pricing</a>
            </li>
            <li>
                <a href='/about'>About</a>
            </li>
        </ul>
    </nav>
  )
}

// https://github.com/WebDevSimplified/react-navbar/blob/main/src/Navbar.js