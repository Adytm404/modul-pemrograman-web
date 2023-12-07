import '../App.css';
import '../bootstrap.css';
import logo from './img/logo-ilab.png';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <section className="nav fixed-top">
      <div className="container">
        <div className="row nav-row">
          <div className="col-4 logo">
            <img src={logo} alt="logo-ilab.png" width="100px" height="50px" style={{ height: '39px' }} />
          </div>
          <div className="col-4 nav-menu">
            <a onClick={() => navigate("/")}>HOME</a>
            <a onClick={() => navigate("/about")}>ABOUT US</a>
            <a onClick={() => navigate("/contact")}>CONTACT</a>
          </div>
          <div className="col-4 nav-button">
            <button type="button" className="btn btn-secondary btn-lg button-signup" onClick={() => navigate("/signup")}>SIGN UP</button>
            <button type="button" className="btn btn-primary btn-lg button-login" onClick={() => navigate("/login")}>LOGIN</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Navbar;
