import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo65.jpg";

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
          <NavLink
            to="/about"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active-nav" : "")
            }
          >
            About
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active-nav" : "")
            }
          >
            Work
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active-nav" : "")
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active-nav" : "")
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
