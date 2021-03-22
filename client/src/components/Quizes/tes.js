


import { useState, useEffect } from 'react'

const Tes = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [radio, setRadio] = useState('')

    return (
        <div>
            <h1>Radio button is :  {radio}</h1>
            <label>Apple :</label>
            <input type='radio'
                checked={radio === 'apple'}
                value='apple'
                onChange={(e) => { setRadio(e.target.value) }}
            />
            <br />
            <label>Orange :</label>
            <input type='radio'
                checked={radio === 'orange'}
                value='orange'
                onChange={(e) => { setRadio(e.target.value) }}
            />
            <br />
            <br />
        </div>
    )
}

export default Tes


// var App = React.createClass({
//     getInitialState: function() {
//       return {
//         radios: {
//           radioA: 'Radio A',
//           radioB: 'Radio B',
//           radioC: 'Radio C'
//         },
//         selected: 'radioA'
//       }
//     },

//     renderRadioWithLabel: function(key) {
//       var isChecked = key === this.state.selected;

//       return (
//         <label className="radio-inline" key={key} htmlFor={key}>
//           <input id={key} type="radio" checked={isChecked} value={key} />
//           {this.state.radios[key]}
//         </label>
//       );
//     },

//     render: function() {
//       return (
//         <div>
//           {Object.keys(this.state.radios).map(function(key) {
//             return this.renderRadioWithLabel(key);
//           }, this)}
//         </div>
//       );
//     }
//   });

//   React.render(<App />, document.getElementById('container'));