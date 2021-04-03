

const apiValidateJobsArticle = (data) => {

    let errors = {}
    console.log(data.values.title)

    if (!data.values.category) {
        errors.category = 'Please, choose category!'
    }

    if (!data.values.title) {
        errors.title = 'Please, fill all fields!'
    } else if (data.values.title.length > 50) {
        errors.title = 'Title must be less than 50 charecters!'
    }

    if (!data.values.article) {
        errors.article = 'Please, fill the article!'
    } else if (data.values.article.length > 5000) {
        errors.article = 'Article must be less than 5000 charecters!'
    }

    return { errors }
}

module.exports = apiValidateJobsArticle