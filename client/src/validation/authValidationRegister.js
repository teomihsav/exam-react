


export const isBodyFieldEmpty = (values, errors) => {

  if (!values.username) { errors.username = 'Username must be typed.' }
  if (!values.email) { errors.email = 'Email must be typed.' }
  if (!values.password) { errors.password = 'Password must be typed.' }
  if (!values.passwordSecond) { errors.passwordSecond = 'Password again must be typed.' }
}

export const isEmpty = (errors) => {
  return Object.values(errors).map(el => {
    return el ? true : false
  })
}
