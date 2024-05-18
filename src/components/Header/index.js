import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header-container">
    <Link className="link" to="/">
      <p>Home</p>
    </Link>
    <Link className="link" to="/about">
      <p>About</p>
    </Link>
  </div>
)

export default Header
