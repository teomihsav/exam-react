

import { useState } from 'react'


const clientQuiz = () => {

    const [values, setValues] = useState({})

    const handleChange = (e) => {

        setValues(values => ({ ...values, [e.target.name]: e.target.value }));
    }

    return (
        <div>
        <p>Please answer on next questions:</p>
        <br></br>
        <form className='add-form' onSubmit={formSubmit}>

            <div className='form-control-out-border-quiz' id="contactChoice1">
                <label><h2>  Walk during the day</h2></label>

                <div className='form-control-out-border-quiz' > <input  type="radio" name="contactChoice1" value={0} ref={register} />
                    <label>  Do you walk 15 to 30 minutes during the day?</label>
                </div>

                <div className='form-control-out-border-quiz'> <input  type="radio" name="contactChoice1" value={1} ref={register} />
                    <label> Do you walk 30 to 60 minutes during the day?</label>
                </div>

                <div className='form-control-out-border-quiz'> <input  type="radio" name="contactChoice1" value={2} ref={register} />
                    <label> Do you walk 1 hour and more during the day?</label>
                </div>

                <span className='error'>{errors.email}</span>
            </div>

            <div className='form-control-out-border-quiz' id="contactChoice2">
                <label><h2>Streaching during the day</h2></label>

                <div className='form-control-out-border-quiz'> <input type="radio" name="contactChoice2" value={0} ref={register} />
                    <label> Do you strech 15 to 30 minutes during the day? </label>
                </div>

                <div className='form-control-out-border-quiz'> <input type="radio" name="contactChoice2" value={1} ref={register} />
                    <label> Do you strech 30 to 60 minutes during the day? </label>
                </div>

                <div className='form-control-out-border-quiz'> <input type="radio" name="contactChoice2" value={2} ref={register} />
                    <label> Do you strech 1 hour and more during the day? </label>
                </div>

                <span className='error'>{errors.email}</span>
            </div>

            <div className='form-control-out-border-quiz' id="contactChoice3">
                <label><h2>Active sports like cicling, hicking, body bulid etc.</h2> </label>
                <div className='form-control-out-border-quiz'> <input type="radio" name="contactChoice3" value={0} ref={register} />
                    <label> Do you have active sports 15 to 30 minutes during the day? </label>
                </div>

                <div className='form-control-out-border-quiz'> <input type="radio" name="contactChoice3" value={1} ref={register} />
                    <label> Do you have active sports 30 to 60 minutes during the day? </label>
                </div>

                <div className='form-control-out-border-quiz'> <input type="radio" name="contactChoice3" value={2} ref={register} />
                    <label> Do you have active sports 1 hour and more during the day? </label>
                    <span className='error'>{errors.email}</span>
                </div>
            </div>
            
            {numDrivers > 0 && (
                <div>
                    <p>Driver 1:</p>
                    <input name="driver1" placeholder="driver1" ref={register} />
                </div>
            )}
            {numDrivers > 1 && (
                <div>
                    <p>Driver 2:</p>
                    <input name="driver2" placeholder="driver2" ref={register} />
                </div>
            )}


            <br></br>

            <button className="btn btn-block" type="submit">
                Submit
        </button>
        </form>
        </div>
    )
}

export default clientQuiz

// export default textStartQuiz

// handleChange = e => {
//     const { name, value } = e.target;

//     this.setState({
//         [name]: value
//     });
// };

// render() {
//     return (

//     );
// }
// }