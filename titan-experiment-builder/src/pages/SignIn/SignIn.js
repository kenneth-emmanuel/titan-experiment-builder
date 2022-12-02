import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './SignIn.css'
import titanLogo from '../../assets/images/titan_logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons'

import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult
} from 'firebase/auth'

import { provider } from '../../firebase-config.js'

const SignIn = () => {
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const authToken = sessionStorage.getItem('auth_token')
    if (authToken) {
      history.push('/search')
    } else {
      const auth = getAuth()
      const redirectResult = getRedirectResult(auth)
      redirectResult
        .then((result) => {
          if (result !== null) {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            const user = result.user
            sessionStorage.setItem('auth_token', token)
            sessionStorage.setItem('logged_in_user', user.email)
            history.push('/search')
          }
          setIsLoading(false)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [history])

  const signInWithGoogle = () => {
    const auth = getAuth()
    signInWithRedirect(auth, provider)
  }

  const spinnerContent = (
    <div className='centeredContent'>
      <p>Signing in...</p>
      <div className='spinner-border text-light' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  )

  const signInFormContent = (
    <div className='centeredContent'>
      <h1 className='heading2 break'>Sign in to get started</h1>
      <button className='btn btn-primary break' onClick={signInWithGoogle}>
        <span className='faIconPosition'>
          <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
        </span>

        <span>Sign in with Google</span>
      </button>
      <button className='btn btn-primary break'>
        <span className='faIconPosition'>
          <FontAwesomeIcon icon={faMicrosoft}></FontAwesomeIcon>
        </span>
        <span>Sign in with Microsoft</span>
      </button>
      <p className='body2 break'>
        <span>Terms of use</span> <span className='mx-3'>|</span>{' '}
        <span>Privacy Policy</span>
      </p>
    </div>
  )

  return (
    <>
      <div className='logoContainer'>
        <img src={titanLogo} alt='' className='companyLogo mx-auto' />
      </div>
      {isLoading && spinnerContent}
      {!isLoading && signInFormContent}
    </>
  )
}

export default SignIn
