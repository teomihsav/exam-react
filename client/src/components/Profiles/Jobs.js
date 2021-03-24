

const Jobs = ({ data }) => {


        console.log('Jobs -->', data)

        return (
                <div>
                        Dear {data.username}, your answers are:
                        <hr></hr>
                        <p></p>
            Your field at sport:
                        <hr></hr>
                        <p></p>
                        <li> {data.jobChoiceOne} </li>
                        <br/>

            Are you traning with pro atlets:
                        <hr></hr>

                        <li> {data.jobChoiceTwo} </li>
                        <br/>

            What sport education/certificates do you have:
                        <hr></hr>

                        <li> {data.jobChoiceThree} </li>
                        <br/>

                        <hr></hr>
                </div>
        )
}

export default Jobs