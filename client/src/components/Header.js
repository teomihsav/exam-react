
import { useState, useEffect } from 'react'
import Menulinks from './MenuLinks'
import jwt_decode from 'jwt-decode';

const Header = ({ isLogged, state }) => {

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
        { id: 1, text: 'Register' },
        { id: 2, text: 'Login' },
        { id: 3, text: 'About' },
    ]

    if (localStorage.getItem('jwtToken')) {
        menu.splice(0, 2, { id: 1, text: 'Logout' })
    } else {
        isLogged(false)
        menu = menu.splice(0, 3, { id: 1, text: 'Logout' })
    }

    console.log('Header loggin state', state)

    return (
        <div>
            <nav className={scrolled ? "NavbarItems scrolled" : "NavbarItems"} >
                <h1 className="navbar-logo"> iMatch <i className="fab fa-react"> </i></h1>
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
                        />

                    )}
                </ul>
            </nav>
        </div >
    )
}

export default Header
