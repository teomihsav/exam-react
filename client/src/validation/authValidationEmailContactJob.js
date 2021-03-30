


export const isBodyFieldEmpty = (values, errors) => { // console.log('From Validation: ', values)

    if (!values.subject) { errors.subject = 'Subject must be typed.' }
    if (!values.message) { errors.message = 'Message must be typed.' }
}

export const isEmpty = (object) => {
  return Object.values(object).map(el => {
    return el ? true : ''
  })
}
