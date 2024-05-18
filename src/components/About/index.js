import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

const Home = () => (
  <div>
    <Header />
    <div className="flex-container">
      <h1>About Route</h1>
      <LogoutButton />
    </div>
  </div>
)
export default Home
