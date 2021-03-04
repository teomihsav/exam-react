

import Header from './components/Header'
import { useState, useEffect } from 'react'

// const fetchTitle = () => {
//   fetch('http://localhost:5000')
//   .then(res => res.json())
//   .then(data => console.log(data))
// }


function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchTasks = () => {
        fetch('http://localhost:5000')
        .then(res => res.json())
        .then(data => {
          setData(data)
        })
    }
    fetchTasks()
  }, [])

  // useEffect(() => {
  //   const getTasks = async () => {
  //     const taskFromServer = await fetchTasks()
  //     console.log('From use Effect', taskFromServer)
  //     setData(taskFromServer)
  //   }
  //   getTasks()
  // }, [])

  // const fetchTasks = async () => {
  //   const res = await fetch('http://localhost:5000')
  //   const dataFetched = await res.json()
  //  // console.log(data)
  //   return dataFetched
  // }


  return (
    <div className="App">

      <Header title={data} />

    </div>
  );
}

export default App;
