


export const isBodyFieldEmpty = (values, errors) => { // console.log('From Validation: ', values)

  if (!values.username) { errors.username = 'Username must be typed' }
  if (!values.email) { errors.email = 'Email must be typed' }
  if (!values.password) { errors.password = 'Password must be typed' }
  if (!values.passwordSecond) { errors.passwordSecond = 'Password again must be typed' }
  console.log('From isBodyFieldEmpty function: ',errors)
  return errors
}

export const isEmpty = (object) => {
  return Object.values(object).map(el => {
    return el ? true : ''
  })
} // console.log('From isEmpty', isEmpty(errors))
