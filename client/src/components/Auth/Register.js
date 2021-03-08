
import { useLayoutEffect } from 'react'

const Register = ({ text }) => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <p>{text.message}</p>
            <form className='add-form'  >
                <div style={{
                    'maxWidth': '450px',
                    'margin': '30px auto',
                    'overflow': 'auto',
                    'minHeight': '30px',
                    'border': '1px solid rgb(113, 110, 255)',
                    'padding': '20px',
                    'borderRadius': '5px'
                }}>
                    <div className='form-control'>
                        <label>Username</label>
                        <input style={{ border: '1px solid rgb(113, 110, 255)', 'borderRadius': '5px', 'outlineColor': 'rgb(113, 110, 255)' }}
                            type='text'
                            placeholder='Type your username'
                        >
                        </input>
                        <span className='error'>{ }</span>
                    </div>
                </div>

                <div style={{
                    'maxWidth': '450px',
                    'margin': '30px auto',
                    'overflow': 'auto',
                    'minHeight': '30px',
                    'border': '1px solid rgb(113, 110, 255)',
                    'padding': '20px',
                    'borderRadius': '5px'
                }}>
                    <div className='form-control'>
                        <label>Password</label>
                        <input style={{ border: '1px solid rgb(113, 110, 255)', 'borderRadius': '5px', 'outlineColor': 'rgb(113, 110, 255)' }}
                            type='text'
                            placeholder='Type your password'
                        >
                        </input>
                        <span className='error'>{ }</span>
                    </div>

                    <div className='form-control'>
                        <input style={{ border: '1px solid rgb(113, 110, 255)', 'borderRadius': '5px', 'outlineColor': 'rgb(113, 110, 255)' }}
                            type='text'
                            placeholder='Type again your password'
                        >
                        </input>
                        <span className='error'>{ }</span>
                    </div>
                </div>


                <input type='submit' value='Register' className='btn btn-block' />
            </form>
        </>
    )
}

export default Register
