

import { Link } from 'react-router-dom'
import './CSS/NavBar.css'

const MenuLinks = ({ id, onClick, isSelected, text }) => { // console.log('isSelected: ', isSelected)
    return (
        <div>
            <Link className={isSelected ? "nav-links-selected" : "nav-links"}
                onClick={() => onClick(id)}
                to={text}
            >
                {text}
            </Link>
        </div>
    )
}

export default MenuLinks
