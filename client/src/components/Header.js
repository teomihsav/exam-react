
import { useState, useEffect } from 'react'
import Menulinks from './MenuLinks'
import { Link } from 'react-router-dom'
import { isExpired } from '../actions/clientAction'

const Header = ({ user, setLogged, state }) => {

    const [scrolled, setScrolled] = useState(false);
    const [clicked, setClicked] = useState()

    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 100) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let navbarClasses = ['NavbarItems'];
    if (scrolled) {
        navbarClasses.push('scrolled');
    }

    let menu = [
        { id: 1, text: 'Home', path: '' },
        { id: 2, text: 'Jobs', path: 'jobs' },
        // { id: 3, text: 'Register', path: 'register' },
        { id: 4, text: 'Login', path: 'login' },
        { id: 5, text: 'Articles', path: 'articles' },
        { id: 6, text: 'About', path: 'about' },
    ]
    console.log('Header loggin state: ', state)

    isExpired() && setLogged(false) // console.log(clicked)

    let link 
    
    if (state) {
        menu.splice(0, 3, { id: 3, text: 'Logout', user, path: 'logout' }, { id: 4, text: 'Profile', path: 'profile' })
        link = ''
    } else { }

    return (
        <div>
            <nav className={scrolled ? "NavbarItems scrolled" : "NavbarItems"} >
                <h1 className="navbar-logo">
                   { state ? <Link className='text-logo'> beSporty </Link> : <Link className='text-logo' to='/'> beSporty </Link>}
                    <i className="fab fa-react"> </i>
                </h1>
                <div className="menu-icon" >
                </div>
                <ul className="nav-menu">
                    {menu.map(el =>
                        <Menulinks
                            key={el.id}
                            id={el.id}
                            isSelected={el.id === clicked}
                            onClick={setClicked}
                            text={el.text}
                            path={el.path}
                            user={el.user}
                        />
                    )}
                </ul>
            </nav>
        </div >
    )
}

export default Header
