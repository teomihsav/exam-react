


import Register from './Auth/Register'

const Header = ({ title }) => {
    console.log(title)
    return (
        <div>
            <header className='header'>
            
                <p style={{ 'text-align': 'center', 'font-size': '20px'}} >{title.message }</p>
            </header>
            <Register />
        </div>
    )
}

export default Header
