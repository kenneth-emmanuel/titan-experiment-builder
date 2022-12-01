import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './SignIn.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons'

import { signInWithPopup } from 'firebase/auth'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { provider } from '../../firebase-config.js'

const SignIn = () => {
  const history = useHistory()

  useEffect(() => {
    const authToken = sessionStorage.getItem('auth_token')
    if (authToken) {
      history.push('/search')
    }
  }, [history])

  const signInWithGoogle = () => {
    const auth = getAuth()
    signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      const user = result.user;
      sessionStorage.setItem('auth_token', token)
      sessionStorage.setItem('logged_in_user', user.email)
      console.log({user});
      history.push('/search')
    })
  }

  return (
    <div className='signinContainer'>
      <h1 className='heading2'>Sign in to get started</h1>
      <button className='btn btn-primary' onClick={signInWithGoogle}>
        <span className='faIconPosition'>
          <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
        </span>

        <span>Sign in with Google</span>
      </button>
      <button className='btn btn-primary'>
        <span className='faIconPosition'>
          <FontAwesomeIcon icon={faMicrosoft}></FontAwesomeIcon>
        </span>
        <span>Sign in with Microsoft</span>
      </button>
      <p className='body2'>
        <span>Terms of use</span> <span className='mx-3'>|</span>{' '}
        <span>Privacy Policy</span>
      </p>
    </div>
  )
}

export default SignIn
