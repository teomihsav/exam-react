


export const isRadioFormEmpty = (values, errors) => { // console.log('From Validation: ', values)

  // console.log('Validation', Object.keys(values))

  if (Object.keys(values).length <= 2) {
    errors.profileAlreadyDone = 'Answer must be marked.'
  } else {
    errors.profileAlreadyDone = ''
  }
}

export const isEmpty = (object) => {
  return Object.values(object).map(el => {
    return el ? true : ''
  })
}
