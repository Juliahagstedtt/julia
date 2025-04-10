import { Link } from 'react-router-dom'

function Header() {
    return (
      <header>
        <nav>
          <button><Link to="/">Hem</Link></button>
          <button><Link to="/pronto">1</Link></button>
          <button><Link to="/radio">2</Link></button>
          <button><Link to="/current">3</Link></button>
          <button><Link to="/timer">4</Link></button>
          <button><Link to="/world">5</Link></button>
          <button><Link to="/trafficlights">6</Link></button>
          <button><Link to="/sunrise">7</Link></button>
          <button><Link to="/makeupproducts">8</Link></button>
          <button><Link to="/formular">9</Link></button>
          <button><Link to="/library">10</Link></button>
          <button><Link to="/form">11</Link></button>
          <button><Link to="/pinkforum">12</Link></button>

        </nav>
      </header>
    )
  }
  
  export default Header