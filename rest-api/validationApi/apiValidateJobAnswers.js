

const apiValidateJobAnswers = (data) => {

    let errors = {}

    console.log('Errors: ', data)

    if (!data.one) {
        errors.one = 'First answer must be selected!'
    }

    if (!data.two) {
        errors.two = 'Second answer must be selected'
    }

    if (!data.three) {
        errors.three = 'Third answer must be selected'
    }

    return { errors }
}

module.exports = apiValidateJobAnswers