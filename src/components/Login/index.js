import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Login = props => {
  const onSubmitSuccess = jwtTkoken => {
    const {history} = props

    Cookies.set('jwt_token', jwtTkoken, {
      expires: 30,
    })
    history.replace('/')
  }

  const onLogin = async () => {
    const username = 'rahul'
    const password = 'rahul@2021'
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    }
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="containers">
      <h1>Please Login</h1>
      <button onClick={onLogin} type="button">
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
