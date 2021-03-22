


import { useState, useEffect } from 'react'


const CompRadio = (key) => {
    // var isChecked = key === this.state.selected;
    const [isChecked, setIsChecked] = useState({})
    const [radio, setRadio] = useState('')

    let radios = {
        radioA: 'Radio A',
        radioB: 'Radio B',
        radioC: 'Radio C'
    }
    let selected = { selected: 'radioA' }

    const renderRadioWithLabel = (key) => {
        // setIsChecked(key)
        console.log(key)

        return (
            <div>
                <label > {key} </label>
                <input
                    type="radio"
                    checked={radio === 'radioA'}
                    value={key}
                    onChange={(e) => { setRadio(e.target.value) }}
                    id={key}
                />
            </div>
        )
    }

    return (
        <div>
            {
                Object.keys(radios).map(key => {

                    return renderRadioWithLabel(key, )
                })
            }
        </div>
    )
}

export default CompRadio