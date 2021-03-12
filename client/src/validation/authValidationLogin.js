


export const isBodyFieldEmpty = (values, errors) => { // console.log('From Validation: ', values)

    if (!values.username) { errors.username = 'Username must be typed' }
    if (!values.password) { errors.password = 'Password must be typed' }

  return errors
}

export const isEmpty = (object) => {
  return Object.values(object).map(el => {
    return el ? true : ''
  })
}
