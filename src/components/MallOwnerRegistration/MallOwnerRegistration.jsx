import React from "react";
import "./MallOwnerRegistration.css";

const MallOwnerRegistration = () => {
  return (
    <>
      <div className="wholeBox13">
        <div className="heading13">
          <h3 className="headings13">Mall Owner Registration</h3>
        </div>

        <div className="borderBox11">
          <form>
            <div className="flexbox">
              <div className="mb-3">
                <div className="firstBox">
                  <label htmlFor="siteName13" className="form-label siteName13">
                    Name
                  </label>
                  <input
                    type="input"
                    className="form-control firstinput13"
                    aria-describedby="siteName13"
                    placeholder="Enter Name"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="secondBox">
                  <label
                    htmlFor="siteAddress13"
                    className="form-label siteAddress13"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="input"
                    className="form-control secondinput13"
                    aria-describedby="siteAddress13"
                    placeholder="Enter Mobile Number"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flexbox">
              <div className="mb-3">
                <div className="firstBox">
                  <label htmlFor="siteName13" className="form-label siteName13">
                    E-Mail
                  </label>
                  <input
                    type="input"
                    className="form-control firstinput13"
                    aria-describedby="siteName13"
                    placeholder="Enter E-Mail"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="secondBox">
                  <label
                    htmlFor="siteAddress13"
                    className="form-label siteAddress13 secondSiteAddress13 responsiveAddress13"
                  >
                    Address
                  </label>
                  <input
                    type="input"
                    className="form-control secondinput13"
                    aria-describedby="siteAddress13"
                    placeholder="Enter Address"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flexbox">
              <div className="mb-3">
                <div className="firstBox">
                  <label
                    htmlFor="siteName13"
                    className="form-label siteName13 altAddress13 responsiveAltNo13"
                  >
                    Alt Mobile Number
                  </label>
                  <input
                    type="input"
                    className="form-control firstinput13"
                    aria-describedby="siteName13"
                    placeholder="Enter Mobile Number"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="secondBox">
                  <label
                    htmlFor="siteAddress13"
                    className="form-label siteAddress13 secondSiteName13 responsiveSiteName13"
                  >
                    Site Name
                  </label>
                  <input
                    type="input"
                    className="form-control secondinput13"
                    aria-describedby="siteAddress13"
                    placeholder="Enter Site Name"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="buttonRegister">
              <button type="button" class="btn btn-success coloredButton13">
                Register
              </button>
            </div>
          </form>
        </div>

        <div className="borderBox13">
          <div className="pagination">
            <div className="border13">
              <a href="#previous">&lt;</a>
            </div>

            <a href="#current" className="noDecoration13">
              {" "}
              <div className="secondBorder13">
                <p>16 </p>{" "}
              </div>
            </a>

            <p> / 20 </p>

            <div className="border13">
              <a href="#next">&gt;</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MallOwnerRegistration;
