import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-md-12 text-center">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/">Home</Link>|
                </li>
                <li className="nav-item">
                  <Link to="/contact">Contact</Link>|
                </li>
                <li className="nav-item">
                  <Link to="/about">About</Link>|
                </li>
                <li className="nav-item">
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
