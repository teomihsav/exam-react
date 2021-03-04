




const Header = ({ title }) => {
    console.log(title)
    return (
        <div>
            <header className='header'>
                <h1> {title.message}</h1>
            </header>
        </div>
    )
}

export default Header
