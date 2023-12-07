import '../App.css';
import Footer from "../Componenets/Footer";
import Navbar from "../Componenets/Navbar";


const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5 loginform">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card px-5 py-5" id="form1">
              <div className="form-data">
                <div className="forms-inputs mb-4">
                  <span>First Name</span>
                  <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="forms-inputs mb-4">
                  <span>Last Name</span>
                  <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="forms-inputs mb-4">
                  <span>Email</span>
                  <input
                    autoComplete="off"
                    type="email"
                    className="form-control"
                  />
                </div>
                <div className="forms-inputs mb-4">
                  <span>Password</span>
                  <input
                    autoComplete="off"
                    type="password"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <button className="btn btn-dark w-100">Signup</button>
                </div>
              </div>
              <div className="success-data">
                <div className="text-center d-flex flex-column">
                  <i className='bx bxs-badge-check'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
