
import '../CSS/JobsProfile.css'

const Jobs = ({ data }) => {


        console.log('Jobs -->', data)

        return (
                <div className='control-out-border-single-job-profile'>

                        <div className="card-single-job-profile">
                                <img src={data.image} alt={data.username} width="100%" height="100%" />

                        </div>
                        <div>
                                Dear {data.username}, your answers are:
                                <br />
                                <br />

                                 Your field at sport:
                        <hr></hr>
                                <p></p>
                                {data.jobChoiceOne}
                                <br />
                                <br />

                                Are you traning with pro atlets:
                        <hr></hr>

                                {data.jobChoiceTwo}
                                <br />
                                <br />

                                What sport education/certificates do you have:
                        <hr></hr>

                                {data.jobChoiceThree}
                                <br />

                        </div>
                </div>
        )
}

export default Jobs