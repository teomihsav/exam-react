


const Register = () => {
    return (
        <form className='add-form'  >
            <div style={{
                'max-width': '450px',
                'margin': '30px auto',
                'overflow': 'auto',
                'min-height': '30px',
                'border': '1px solid rgb(113, 110, 255)',
                'padding': '20px',
                'border-radius': '5px'
            }}>
                <div className='form-control'>
                    <label>Username</label>
                    <input style={{ border: '1px solid rgb(113, 110, 255)', 'border-radius': '5px', 'outline-color': 'rgb(113, 110, 255)' }}
                        type='text'
                        placeholder='Type your username'
                    >
                    </input>
                    <span className='error'>{ }</span>
                </div>
            </div>

            <div style={{
                'max-width': '450px',
                'margin': '30px auto',
                'overflow': 'auto',
                'min-height': '30px',
                'border': '1px solid rgb(113, 110, 255)',
                'padding': '20px',
                'border-radius': '5px'
            }}>
                <div className='form-control'>
                    <label>Password</label>
                    <input style={{ border: '1px solid rgb(113, 110, 255)', 'border-radius': '5px', 'outline-color': 'rgb(113, 110, 255)' }}
                        type='text'
                        placeholder='Type your password'
                    >
                    </input>
                    <span className='error'>{ }</span>
                </div>

                <div className='form-control'>
                    <input style={{ border: '1px solid rgb(113, 110, 255)', 'border-radius': '5px', 'outline-color': 'rgb(113, 110, 255)' }}
                        type='text'
                        placeholder='Type again your password'
                    >
                    </input>
                    <span className='error'>{ }</span>
                </div>
            </div>


            <input type='submit' value='Register' className='btn btn-block' />
        </form>
    )
}

export default Register
