

const Clients = ({ data }) => {

    console.log('Clients -->', data)

    return (
        <div>
            Dear {data.username}, your answers are:
            <hr></hr>
            <p></p>
            <br />
    Walk during the day:
            <hr></hr>
            <p></p>
            <li> {data.AnswerOne} </li>
            <br />

    Streaching during the day:
            <hr></hr>

            <li> {data.AnswerTwo} </li>
            <br />

    Active sports like cicling, hicking, body bulid etc:
            <hr></hr>

            <li> {data.AnswerThree} </li>
            <br />

    We recommend you to:
            <hr></hr>
        </div>
    )
}

export default Clients