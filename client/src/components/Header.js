
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CSS/NavBar.css'

const Header = ({ headerText }) => {

    const [scrolled, setScrolled] = useState(false);
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

    const [menuReg, setMenuReg] = useState(false)
    const [menuLog, setMenuLog] = useState(false)
    const [menuAbt, setMenuAbt] = useState(false)

    const handleClickReg = () => {
        setMenuReg(!menuReg)
        if (menuLog || menuAbt) {
            setMenuLog(false)
            setMenuAbt(false)
        }
    }
    const handleClickLog = () => {
        setMenuLog(!menuLog)
        if (menuReg || menuAbt) {
            setMenuReg(false)
            setMenuAbt(false)
        }
    }
    const handleClickAbt = () => {
        setMenuAbt(!menuAbt)
        if (menuReg || menuLog) {
            setMenuLog(false)
            setMenuReg(false)
        }
    }

    return (
        <div>
            <nav className={scrolled ? "NavbarItems scrolled" : "NavbarItems"} >
                <h1 className="navbar-logo"> iMatch <i className="fab fa-react"> </i></h1>
                <div className="menu-icon" >
                </div>
                <ul className="nav-menu">
                    <Link onClick={handleClickReg} className={menuReg ? ("nav-links-selected") : "nav-links"} to="/register">Register</Link>
                    <Link onClick={handleClickLog} className={menuLog ? ("nav-links-selected") : "nav-links"} to="/login">Login</Link>
                    <Link onClick={handleClickAbt} className={menuAbt ? ("nav-links-selected") : "nav-links"} to="/about">About</Link>
                </ul>
            </nav>
        </div>
    )
}
//  <p style={{ 'text-align': 'center', 'font-size': '20px' }} >{headerText.message}</p>
export default Header
