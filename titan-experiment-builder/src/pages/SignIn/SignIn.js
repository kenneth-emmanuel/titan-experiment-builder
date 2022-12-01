import './SignIn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons'

const SignIn = () => {
  return (
    <div className='signinContainer'>
      <h1 className='heading2'>Sign in to get started</h1>
      <button className='btn btn-primary'>
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
