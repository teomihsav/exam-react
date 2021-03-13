

const apiValidateRegistration = (data) => {

    let errors = {}

    if (!data.username) { errors.username = 'Username must be typed' }

    if (!data.email) {
        errors.email = 'Email must be typed'
    } else {
        if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Must be valid e-mail'
        }
    }
    if (!data.password) { errors.password = 'Password must be typed' }
    if (!data.passwordSecond) { errors.passwordSecond = 'Password again must be typed' }
    return { errors }
}

module.exports = apiValidateRegistration