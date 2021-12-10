import React from "react";

export const RegistrationForm = () => {
  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="trainer-item backdrop-item text-black">
              <div className="card-body p-md-5" id="register-body">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Register
                    </p>

                    <form
                      className="mx-1 mx-md-4"
                      method="POST"
                      action={`${process.env.REACT_APP_BACKEND}/register`}
                      autoComplete="off"
                    >
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="bi bi-person-fill fa-lg me-3 fa-fw label-icons-signin"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            placeholder="Your Name"
                            name="name"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="bi bi-person-badge fa-lg me-3 fa-fw label-icons-signin"></i>
                        <div className="form-outline flex-fill mb-0">
                          <select
                            name="userRole"
                            id="userRole"
                            className="form-control"
                          >
                            <option value="Owner"> Gym Owner </option>
                            <option value="Participant"> Gym Member </option>
                          </select>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="bi bi-envelope-fill fa-lg me-3 fa-fw label-icons-signin"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            placeholder="your_email@gmail.com"
                            name="email"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="bi bi-lock-fill fa-lg me-3 fa-fw label-icons-signin"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            placeholder="password"
                            name="password"
                          />
                        </div>
                      </div>

                      {/* <div className="d-flex flex-row align-items-center mb-4">
                        <i className="bi bi-key-fill fa-lg me-3 fa-fw label-icons-signin"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            className="form-control"
                            placeholder="Repeat your password"
                          />
                        </div>
                      </div> */}
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-primary btn-lg">
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
