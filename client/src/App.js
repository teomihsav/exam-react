

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { Provider } from 'react-redux'
import store from './store'
import { TEST_DISPATCH } from './actions/types'

import Header from './components/Header'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Logout from './components/Auth/Logout'
import Articles from './components/Articles/Articles'
import Profile from './components/Profiles/Profile'
import JobQuiz from './components/Quizes/JobQuiz'
import ClientQuiz from './components/Quizes/ClientQuiz'
import SingleArticle from './components/Articles/SingleArticle'
import About from './components/StaticPages/About'
import Footer from './components/StaticPages/Footer'
import ClientHome from './components/StaticPages/ClientHome'
import JobHome from './components/StaticPages/JobHome'

const App = (props) => {

  const [logged, setLogged] = useState(false)
  const [typeUser, setTypeUser] = useState()
  const [id, setId] = useState()

  // After refresh -> F5 check for token and overright the state setLogged
  useEffect(() => {

    if (localStorage.getItem('jwtToken')) {
      const token = localStorage.getItem('jwtToken')
      setAuthToken(token);
      const decoded = jwt_decode(token)
      console.log('Decoded user: ', decoded.name)
      store.dispatch({
        type: TEST_DISPATCH,
        payAuth: true,
        payUser: decoded.name,
        payId: decoded.id,
        payType: decoded.typeUser
      })

      // setLogged(decoded.name)
      setTypeUser(decoded.typeUser)
      setId(decoded.id)

    } else {
      localStorage.removeItem('jwtToken')
      // setLogged(false)
    }
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <div className='main-container background-color'>

          <Header />

          <div className="container">

            <Route
              path='/' exact
              component={() => <ClientHome />}
            />
            <Route
              path='/jobs' exact
              component={() => <JobHome />}
            />
            <Route
              path='/start' exact
              component={() => <ClientQuiz />}
            />
            <Route
              path='/startjobs' exact
              component={() => <JobQuiz />}
            />
            <Route
              path='/profile' exact
              component={() => <Profile id={id} typeUser={typeUser}/>}
            />
            <Route
              path='/register' exact
              component={() => <Register />}
            />

            <Route
              path='/login' exact
              component={() => <Login />}
            />

            <Route
              path='/logout' exact
              component={() => <Logout />}
            />
            <Route
              path='/singlearticle' exact
              component={() => <SingleArticle user={logged} />}
            />
            <Route exact
              path='/articles'
              component={Articles}
            />

            <Route
              path='/about' exact
              component={() => <About user={logged} />}
            />

          </div>

          <div className="footer">
            <Footer data={'Всички права запазени'} />
          </div>

        </div>

      </Router>
    </Provider>
  )
}

export default App
