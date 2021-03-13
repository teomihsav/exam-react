
import { useState, useEffect } from 'react'
import Menulinks from './MenuLinks'

const Header = ({ headerText }) => {

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
