

const apiValidateJobsArticle = (data) => {

    let errors = {}
    console.log(data.values.title)

    if (!data.values.category) {
        errors.category = 'Please, fill all fields!'
    }

    if (!data.values.title) {
        errors.title = 'Please, fill all fields!'
    } 

    if (!data.values.article) {
        errors.article = 'Please, fill all fields!'
    } 

    return { errors }
}

module.exports = apiValidateJobsArticle