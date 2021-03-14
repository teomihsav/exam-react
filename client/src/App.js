

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import About from './components/About'
import Home from './components/Home'
import Logout from './components/Logout'
import { useState, useEffect } from 'react'

function App() {
  
  const [logged, setLogged] = useState(false)

  return (
    <Router>
      <div>
        < Header isLogged={setLogged} state={logged} />
        <div className="container">

          <Route
            path='/home' exact
            component={Home}
          />

          <Route
            path='/register' exact
            component={() => <Register text={'Register'} />}
          />

          <Route
            path='/login' exact
            component={() => <Login isLogged={setLogged} state={logged}/>}
          />

          <Route
            path='/logout' exact
            component={() => <Logout isLogged={setLogged} state={logged}/>}
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
