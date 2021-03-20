

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Logout from './components/Auth/Logout'
import About from './components/About'
import Home from './components/Home'
import JobHome from './components/JobHome'
import Profile from './components/Profile'
import JobQuiz from './components/Quizes/JobQuiz'
import ClientQuiz from './components/Quizes/ClientQuiz'
import { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode';

function App() {

  const [logged, setLogged] = useState(false)

  // console.log('State at App: ', logged.name)

  // After refresh -> F5 check for token and overright the state setLogged
  useEffect(() => {

    if (localStorage.getItem('jwtToken')) {
      const token = localStorage.getItem('jwtToken')
      const decoded = jwt_decode(token)
      console.log('decoded user: ', decoded.name)
      setLogged(decoded.name)
      console.log('State after login: ', decoded.name)
    } else {
      localStorage.removeItem('jwtToken')
      setLogged(false)
    }
  }, [])

  return (
    <Router>
      <div className='main-container background-color'>
        < Header user={logged} setLogged={setLogged} state={logged} />
        <div className="container">

          <Route
            path='/' exact
            component={() => < Home />}
          />
          <Route
            path='/start' exact
            component={() => <ClientQuiz user={logged} />}
          />
          <Route
            path='/jobs' exact
            component={() => <JobHome user={logged} />}
          />
          <Route
            path='/startjobs' exact
            component={() => <JobQuiz user={logged} />}
          />
          <Route
            path='/profile' exact
            component={() => <Profile user={logged} />}
          />
          <Route
            path='/register' exact
            component={() => <Register text={'Register'} />}
          />

          <Route
            path='/login' exact
            component={() => <Login isLogged={setLogged} state={logged} />}
          />

          <Route
            path='/logout' exact
            component={() => <Logout isLogged={setLogged} state={logged} />}
          />

          <Route exact
            path='/about'
            component={About}
          />

        </div>

        <div className="footer">
          <Footer data={'Всички права запазени'} />
        </div>

      </div>
    </Router>
  );
}

export default App;
