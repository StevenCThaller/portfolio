import { Link } from "react-router-dom";
import logo from "../../assets/logo65.jpg";

function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/" className="brand col-sm-12">
          <img src={logo} alt="Cody Codes logo" />
          <div className="ody-odes">
            <span>ody</span>
            <span>odes</span>
          </div>
        </Link>
        <nav className="top-nav col-sm-12">
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
