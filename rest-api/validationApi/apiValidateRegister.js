

const apiValidateRegistration = (data) => {

    let errors = {}

    if (!data.username) {
        errors.username = 'Username must be typed!'
    } else if (data.username.length < 3) {
        error.username = 'Username must be more than 3 charecters!'
    }

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
    if (!data.passwordSecond) {
        errors.passwordSecond = 'Password again must be typed!'
    } else if (data.passwordSecond.length < 1) {
        error.passwordSecond = 'Password must be more than 6 charecters!'; // console.log('plus: ', username.length)
    }

    return { errors }
}

module.exports = apiValidateRegistration