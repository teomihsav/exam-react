



const Header = ({ headerText }) => {
    return (
        <div>

            <header className='header'>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
                <a href="/about">About</a>
                <p style={{ 'text-align': 'center', 'font-size': '20px' }} >{headerText.message}</p>
            </header>
        </div>
    )
}

export default Header
