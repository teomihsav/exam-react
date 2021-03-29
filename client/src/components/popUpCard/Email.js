


const styles = {
    card: { padding: 50, maxWidth: 800, margin: "0 auto 300px" },
    button: { display: "flex", marginLeft: "auto" }
};

const Email = ({ setOn, isOn}) => {

    let errors = {}

    return (
        <div className='card'>
        
        <form className='add-form'  >
        <div className='form-control-out-border'>
            <div className='form-control'>
            <button type="button" className="btn-close" onClick={e => { setOn(!isOn) }} ><span aria-hidden="true" >&times;</span></button>
                <label>Subject</label>
                <input className={errors.email ? 'form-control-border-error' : 'form-control-border'}
                    type='text'
                    name='email'
                    placeholder='Type your email'
                    value={''}
                    onChange={''}
                >
                </input>
                <span className='error'>{errors.email}</span>
            </div>
        </div>

        <div className='form-control-out-border'>
            <div className='form-control'>
                <label>Message</label>
                <textarea className={errors.password ? 'form-control-border-error' : 'form-control-border'}
                    rows='5'
                    cols='45'
                    name='message'
                    value={''}
                    onChange={''}
                >
                </textarea>
                <span className='error'>{errors.password}</span>
            </div>
        </div>

        <input type='submit' value='Send E-mail' className='btn btn-block' />
    </form>
        </div>
    )
}

export default Email
