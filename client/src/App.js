

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Logout from './components/Auth/Logout'
import About from './components/About'
import Articles from './components/Articles/Articles'
import ClientHome from './components/ClientHome'
import JobHome from './components/JobHome'
import Profile from './components/Profiles/Profile'
import JobQuiz from './components/Quizes/JobQuiz'
import JobsFront from './components/JobsFront'
import ClientQuiz from './components/Quizes/ClientQuiz'
import SingleArticle from './components/Articles/SingleArticle'
import TestSlide from './components/Quizes/TestSlide'
import { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode';

function App() {

  const [logged, setLogged] = useState(false)
  const [typeUser, setTypeUser] = useState()
  const [id, setId] = useState()

  // After refresh -> F5 check for token and overright the state setLogged
  useEffect(() => {

    if (localStorage.getItem('jwtToken')) {
      const token = localStorage.getItem('jwtToken')
      const decoded = jwt_decode(token)
      console.log('Decoded user: ', decoded.name)
      setLogged(decoded.name)
      setTypeUser(decoded.typeUser)
      setId(decoded.id)
      console.log('TypeUser App: ', typeUser)
      console.log('State after login: ', decoded)
    } else {
      localStorage.removeItem('jwtToken')
      setLogged(false)
    }
  }, [logged])

  return (
    <Router>
      <div className='main-container background-color'>

        <Header user={logged} setLogged={setLogged} state={logged} />

        <div className="container">

          <Route
            path='/' exact
            component={() => < ClientHome />}
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
            component={() => <Profile id={id} typeUser={typeUser} />}
          />
          <Route
            path='/register' exact
            component={() => <Register isLogged={setLogged} state={logged} />}
          />

          <Route
            path='/login' exact
            component={() => <Login isLogged={setLogged} state={logged} />}
          />

          <Route
            path='/logout' exact
            component={() => <Logout isLogged={setLogged} state={logged} />}
          />
          <Route
            path='/singlearticle' exact
            component={() => <SingleArticle user={logged} />}
          />
          <Route exact
            path='/articles'
            component={Articles}
          />

          <Route exact
            path='/about'
            component={About}
          />

        </div>

        <div>
          {!logged && <JobsFront />}
        </div>

        <div className="footer">
          <Footer data={'Всички права запазени'} />

        </div>

      </div>

    </Router>
  );
}

export default App;
