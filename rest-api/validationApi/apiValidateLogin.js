

const apiValidateLogin = (data) => {

    let errors = {}

    if (!data.email) {
        errors.email = 'Email must be typed!'
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Must be valid e-mail!'
    }

    if (!data.password) {
        errors.password = 'Password must be typed!'
    } else if (data.password.length < 1) {
        error.password = 'Password must be more than 6 charecters!'
    }

    return { errors }
}

module.exports = apiValidateLogin