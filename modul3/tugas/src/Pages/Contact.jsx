import Footer from "../Componenets/Footer";
import Navbar from "../Componenets/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section class="jumbo-main">
      <div className="container mt-5 loginform">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card px-5 py-5" id="form1">
              <div className="form-data">
                <div className="forms-inputs mb-4">
                  <span>Name</span>
                  <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="forms-inputs mb-4">
                  <span>NIM</span>
                  <input
                    autoComplete="off"
                    type="number"
                    className="form-control"
                  />
                </div>
                <div className="forms-inputs mb-4">
                  <span>Message</span>
                  <textarea
                    autoComplete="off"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <button className="btn btn-dark w-100">Send</button>
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
    </section>
    <Footer />
    </>
  );
};
export default Contact;
