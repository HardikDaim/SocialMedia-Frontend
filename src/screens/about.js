import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function About() {
  const bgColor = {
    backgroundColor: "#f0f4f8",
}
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={bgColor}>

      <section className="pt-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="card bg-dark-overlay-4 overflow-hidden card-bg-scale h-400 text-center"
                style={{
                  backgroundImage: "url(images/about-img.jpg)",
                  backgroundPosition: "center left",
                  backgroundSize: "cover",
                }}
              >
                <img
                  src="/about-img.jpg"
                  style={{
                    backgroundPosition: "center left",
                    backgroundSize: "cover",
                  }}
                  alt="About Us"
                />
                {/* Card Image overlay */}
                <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                  <div className="w-100 my-auto">
                    <h1 className="text-white display-4">About us</h1>
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
                          About us
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

      {/* About START */}
      <section className="pt-4 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto">
              <h1 className="text-4xl font-bold my-2">Our Story</h1>
              <p className="lead">
                At Bit by Bit, our journey began with a shared passion for a
                sustainable future by our team members.Starting our project on
                20 August,2023 ,the idea of working on this project came from 3
                of our team members who belonged to a farmer family and they
                continuously saw their farmer family facing problems on crop
                diseases,most of them always remained unidentified and most of
                the time they couldn't get the solution to the problem, thereby
                decreasing the yield of crops.They understood the challenges and
                the aspirations of farming community.They saw the need for a
                solution to this never ending problem to help farmers thrive
                while preserving our planet for future generations.
              </p>
              <h1 className="text-4xl font-bold mb-3 mt-5">Our Mission</h1>
              <p className="lead">
                Our mission is to assist farmers in quickly and accurately
                identify crop diseases using technological means.We also provide
                expert support after the disease is identified.
              </p>

              <h1 className="text-4xl font-bold mb-3 mt-5">
                Our Commitment to Farmers
              </h1>
              <p className="lead">
                We are committed to doing real time surveys in different states
                by collaborating with NGOs and ask the exact problem that the
                farmers are facing and accordingly provide the solution by
                taking into consideration all the factors which include climatic
                conditions , area of agriculture etc.{" "}
              </p>
              <h3 class="text-4xl font-bold mb-5 mt-5">Our Team</h3>

              <div className="row g-4">
                {/* Team item*/}
                <div className="col-sm-6 col-lg-3">
                  <div className="text-center">
                    <div className="d-flex flex-column align-items-center">
                      {/* <!-- Avatar img --> */}
                      <div className="avatar avatar-xxl mb-2">
                        <img
                          className="avatar-img rounded-circle"
                          src="images/Hardik.jpg"
                          height="120"
                          width="120"
                          alt="avatar"
                        />
                      </div>
                      <h5 className="font-bold text-3xl m-2">Hardik Daim</h5>
                      <p className="m-0 text-red-500">Team Leader</p>
                    </div>
                  </div>
                </div>
                {/* Team item*/}
                <div className="col-sm-6 col-lg-3">
                  <div className="text-center">

                  <div className="d-flex flex-column align-items-center">
                    {/* Avatar img */}
                    <div className="avatar avatar-xxl mb-2">
                      <img
                        className="avatar-img rounded-circle"
                        src="images/Gurpreet.jpg"
                        height="120"
                        width="120"
                        alt="avatar"
                      />
                    </div>
                    <h5 className="font-bold text-3xl m-2">Gurpreet Singh</h5>
                    <p className="m-0">Team Member</p>
                  </div>
                  </div>
                </div>
                {/* Team item*/}
                <div className="col-sm-6 col-lg-3">
                  <div className="d-flex flex-column align-items-center">
                    {/* Avatar img */}
                    <div className="avatar avatar-xxl mb-2">
                      <img
                        className="avatar-img rounded-circle"
                        src="images/Deepti.jpg"
                        height="120"
                        width="120"
                        alt="avatar"
                      />
                    </div>
                    <h5 className="font-bold text-3xl m-2">Deepti Midha</h5>
                    <p className="m-0">Team Member</p>
                  </div>
                </div>
                {/* Team item*/}
                <div className="col-sm-6 col-lg-3">
                  <div className="d-flex flex-column align-items-center">
                    {/* Avatar img */}
                    <div className="avatar avatar-xxl mb-2">
                      <img
                        className="avatar-img rounded-circle"
                        src="images/Divyansh.jpg"
                        height="120"
                        width="120"
                        alt="avatar"
                      />
                    </div>
                    <h5 className="font-bold text-3xl m-2">Divyansh Kaushik</h5>
                    <p className="m-0">Team Member</p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="d-flex flex-column align-items-center">
                    {/* Avatar img */}
                    <div className="avatar avatar-xxl mb-2">
                      <img
                        className="avatar-img rounded-circle"
                        src="images/Kabir.jpg"
                        height="120"
                        width="120"
                        alt="avatar"
                      />
                    </div>
                    <h5 className="font-bold text-3xl m-2">Kabir</h5>
                    <p className="m-0">Team Member</p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="d-flex flex-column align-items-center">
                    {/* Avatar img */}
                    <div className="d-flex flex-column align-items-center">
                      <img
                        className="avatar-img rounded-circle"
                        src="images/Harman.jpeg"
                        height="120"
                        width="120"
                        alt="avatar"
                      />
                    </div>
                    <h5 className="font-bold text-3xl m-2">Harmanpreet Kaur</h5>
                    <p className="m-0">Team Member</p>
                  </div>
                </div>
              </div>
              {/* Team END */}
              {/* Service START */}

              <h1 className="text-4xl font-bold mb-3 mt-5">
                Join us in supporting Farmers
              </h1>
              <p className="lead mb-5">
                Whether you are a farmer looking to enhance your crop yield or
                an advocate for sustainable agriculture , Bit by Bit welcomes
                you with open arms to join our mission.Together we can support
                farmers and cultivate a sustainable future.{" "}
              </p>
            </div>{" "}
            {/* Col END */}
          </div>
        </div>
      </section>
      </div>
      {/* About END */}
      <div>
        <Footer />
      </div>
    </>
  );
}
