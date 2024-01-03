import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default function Contact() {
  const bgColor = {
    backgroundColor: "#f0f4f8",
}
  return (
    
    <>
      <div>
        <Navbar />{" "}
      </div>
      <div style={bgColor}>

      <section className="pt-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="card bg-dark-overlay-4 overflow-hidden card-bg-scale h-400 text-center"
                style={{
                  backgroundImage: "url(images/contact-img.png)",
                  backgroundPosition: "center left",
                  backgroundSize: "cover",
                }}
              >
                <img
                  src="/contact-img.png"
                  style={{
                    backgroundPosition: "center left",
                    backgroundSize: "cover",
                  }}
                  alt="About Us"
                />
                {/* Card Image overlay */}
                <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                  <div className="w-100 my-auto">
                    <h1 className="text-white display-4">Contact Us</h1>
                    {/* breadcrumb */}
                    <nav
                      className="d-flex justify-content-center"
                      aria-label="breadcrumb"
                    >
                      <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                        <li className="breadcrumb-item">
                          <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to="/"
                          >
                            <i className="bi bi-house me-1"></i> Home
                          </Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          style={{ color: "white" }}
                        >
                          Contact Us
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Inner intro END */}
      <section className="pt-4 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto">
              <h1 className="text-xl font-bold mt-5 mb-3">
                Contact Support - <span className="text-indigo-700">Bit by Bit    </span> 
              </h1>
              <h1 className="text-xl font-bold mt-5 mb-3">
                Contact Information:{" "}
              </h1>
              <h1 className="text-xl font-bold mt-5 mb-3">
                Customer Support Email:{" "}
                <a
                  href="mailto:bitbybit1818@gmail.com"
                  className="text-indigo-700"
                >
                  bitbybit1818@gmail.com
                </a>
              </h1>
              <h1 className="text-xl font-bold mt-5 mb-3">
                Customer Support Phone :{" "}
                <a href="tel:9518213371" className="text-indigo-700">
                  9518213371
                </a>
              </h1>

              <h1 className="text-xl font-bold mt-5 mb-3">
                {" "}
                Live chat with Experts( available on app):<span className="text-indigo-700">Monday to Friday ,9AM
                to 6PM IST{" "}</span> 
              </h1>
              <h1 className="text-xl font-bold mt-5 mb-3">
                Emergency Support:
              </h1>
              <h1 className="text-xl font-bold mt-5 mb-3 text-indigo-700">
                For urgent matters outside of our regular business hours, please
                use the emergency contact information below.
              </h1>
              <ul>
                <li className="text-xl font-bold mt-5 mb-3">
                  <strong>Emergency Contact Email:</strong>{" "}
                  <a href="mailto:bitbybit4567@gmail.com" className="text-indigo-700" >
                    bitbybit4567@gmail.com
                  </a>
                </li>
                <li className="text-xl font-bold mt-5 mb-3" >
                  <strong>Emergency Contact Phone:</strong>  <a href="tel: 7814910190" className="text-indigo-700">
                  7814910190
                </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
