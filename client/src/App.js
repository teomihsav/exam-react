

import Header from './components/Header'
import { useEffect } from 'react'

// const fetchTitle = () => {
//   fetch('http://localhost:5000')
//   .then(res => res.json())
//   .then(data => console.log(data))
// }


function App() {

  useEffect(() => {
    const fetchTitle = async () => {
      const res = await fetch('http://localhost:5000/')
      const data = await res.json()

      console.log(data)
    }
    fetchTitle()
  }, [])


  return (
    <div className="App">

      <Header title='test' />

    </div>
  );
}

export default App;
