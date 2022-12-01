import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'

const Search = () => {
  const history = useHistory()
  const [loggedInUser, setLoggedInUser] = useState('')

  useEffect(() => {
    const authToken = sessionStorage.getItem('auth_token')
    setLoggedInUser(sessionStorage.getItem('logged_in_user'))
    if (!authToken) {
      history.push('/sign-in')
    }
  }, [history])

  const signOutHandler = () => {
    const auth = getAuth()
    signOut(auth)
      .then((d) => {
        console.log(d)
        sessionStorage.removeItem('auth_token')
        history.push('/sign-in')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className='signinContainer text-center'>
      <h3>Search Page</h3>
      <h6>
        Logged in as <em>{loggedInUser}</em>
      </h6>
      <button className='btn btn-primary' onClick={signOutHandler}>
        Logout
      </button>
    </div>
  )
}

export default Search
