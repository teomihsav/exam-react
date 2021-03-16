
import { useState, useEffect } from 'react'
import Menulinks from './MenuLinks'
import { Link } from 'react-router-dom'
import TextStartQuiz from './Quizes/QuizOne'

const Header = ({ user }) => {

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
        { id: 1, text: 'Home', path: '/' },
        { id: 2, text: 'Jobs', path: 'jobs' },
        { id: 3, text: 'Register', path: 'register' },
        { id: 4, text: 'Login', path: 'login' },
        { id: 5, text: 'About', path: 'about' },
    ]
    console.log('Header loggin state: ', user)

    console.log(clicked)

    if (user) {
        menu.splice(0, 4, { id: 1, text: 'Logout', user }, { id: 2, text: 'Profile' })
    } else {

    }
    
    return (
        <div>
            <nav className={scrolled ? "NavbarItems scrolled" : "NavbarItems"} >
                <h1 className="navbar-logo">
                    <Link className='text-logo-link ' to='/Home'> iMatch </Link>
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
