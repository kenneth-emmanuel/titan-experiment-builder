import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import './App.css'
import Search from './pages/Search/Search'
import SignIn from './pages/SignIn/SignIn'

function App() {
  return (
    <div className='app-container'>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/sign-in' />
          </Route>
          <Route path='/sign-in'>
            <SignIn />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
