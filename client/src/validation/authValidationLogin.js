


export const isBodyFieldEmpty = (values, errors) => { // console.log('From Validation: ', values)

    if (!values.email) { errors.email = 'E-mail must be typed' }
    if (!values.password) { errors.password = 'Password must be typed' }
}

export const isEmpty = (object) => {
  return Object.values(object).map(el => {
    return el ? true : ''
  })
}
