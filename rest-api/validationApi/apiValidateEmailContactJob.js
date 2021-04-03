

const apiValidateEmailContactJob = (data) => {

    let errors = {}

    console.log(data)


    if (!data.values.subject) {
        errors.subject = 'Subject must be typed!'
    } else if (data.values.subject.length > 50) {
        error.subject = 'Subject must be less than 50 charecters!'
    }

    if (!data.values.message) {
        errors.message = 'Message must be typed!'
    } else if (data.values.subject.length > 1000) {
        error.subject = 'Message must be less than 1000 charecters!'
    }


    return { errors }
}

module.exports = apiValidateEmailContactJob