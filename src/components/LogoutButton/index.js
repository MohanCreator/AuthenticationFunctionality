import './index.css'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const logOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="flex-container">
      <button onClick={logOut} type="button">
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
