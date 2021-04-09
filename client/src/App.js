

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useEffect } from 'react'

import { Provider } from 'react-redux'
import store from './store'
import { refresh } from './utils/refresh'

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
import NoPage from './components/StaticPages/NoPage'

const App = () => {

  useEffect(() => {
    refresh()
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <div className='main-container background-color'>

          <Route exact component={Header} />

          <div className="container">

            <Switch>

              <Route path='/' exact component={ClientHome} />
              <Route path='/jobs' exact component={JobHome} />
              <Route path='/start' exact component={ClientQuiz} />
              <Route path='/startjobs' exact component={JobQuiz} />
              <Route path='/profile' exact component={Profile} />
              <Route path='/register' exact component={Register} />
              <Route path='/login' exact component={Login} />
              <Route path='/logout' exact component={Logout} />
              <Route path='/singlearticle' exact component={SingleArticle} />
              <Route path='/articles' exact component={Articles} />
              <Route path='/about' exact component={About} />
              <Route exact component={NoPage} />

            </Switch>

            <div className="footer">
              <Footer data={'Всички права запазени'} />
            </div>

          </div>

        </div>
      </Router>
    </Provider>
  )
}

export default App
