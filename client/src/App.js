

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import About from './components/About'
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
      fetch('http://localhost:5000/')
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
    <Router>
      <div>

        <div className="container">

          <Route
            path='/'
            exact
            render={(props) => (
              <div>
                {< Header headerText={data} />}
              </div>
            )}
          />

          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/about' component={About} />

          <div className="footer">
            <Footer data={'Всички права запазени'} />
          </div>

        </div>

      </div>
    </Router>
  );
}

export default App;
