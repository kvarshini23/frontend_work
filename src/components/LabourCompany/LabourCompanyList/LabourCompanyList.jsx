import React from "react";
import { Link } from "react-router-dom";
import "./LabourCompanyList.css";
import edit from "../../Icons/edit.png";

const Demo = () => {
  return (
    <>
      <h1 class="header0011">
        <span class="header_text0011">Labour Company List</span>
      </h1>

      <div class="cold11">
        <span>
          {" "}
          <button type="button" class="btnnew">
            Registration <img src={edit} alt="" />
          </button>
        </span>
      </div>

      <div class="zoo">
        <div class="row">
          <div class="col-sm mad11">
            <div class="card" style={{}}>
              <div style={{ background: "#D6FCD0", height: "200px" }}></div>
              <div class="card-body">
                <button
                  style={{
                    marginLeft: "2px",
                    marginTop: "2px",
                    background: "#D6FCD0",
                  }}
                  type="button"
                  class="btn"
                >
                  <Link
                    to="/labourCompanyProfile"
                    type="button"
                  >
                    View
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm mad11">
            <div class="card" style={{}}>
              <div style={{ background: "#D6FCD0", height: "200px" }}></div>
              <div class="card-body">
                <button
                  style={{
                    marginLeft: "2px",
                    marginTop: "2px",
                    background: "#D6FCD0",
                  }}
                  type="button"
                  class="btn"
                >
                  <Link
                    to="/labourCompanyProfile"
                    type="button"
                  >
                    View
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm mad11">
            <div class="card" style={{}}>
              <div style={{ background: "#D6FCD0", height: "200px" }}></div>
              <div class="card-body">
                <button
                  style={{
                    marginLeft: "2px",
                    marginTop: "2px",
                    background: "#D6FCD0",
                  }}
                  type="button"
                  class="btn"
                >
                   <Link
                    to="/labourCompanyProfile"
                    type="button"
                  >
                    View
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm mad11">
            <div class="card" style={{ width: "" }}>
              <div style={{ background: "#D6FCD0", height: "200px" }}></div>
              <div class="card-body">
                <button
                  style={{
                    marginLeft: "2px",
                    marginTop: "2px",
                    background: "#D6FCD0",
                  }}
                  type="button"
                  class="btn"
                >
                   <Link
                    to="/labourCompanyProfile"
                    type="button"
                  >
                    View
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm mad11">
            <div class="card" style={{}}>
              <div style={{ background: "#D6FCD0", height: "200px" }}></div>
              <div class="card-body">
                <button
                  style={{
                    marginLeft: "2px",
                    marginTop: "2px",
                    background: "#D6FCD0",
                  }}
                  type="button"
                  class="btn"
                >
                   <Link
                    to="/labourCompanyProfile"
                    type="button"
                  >
                    View
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm mad11">
            <div class="card" style={{}}>
              <div style={{ background: "#D6FCD0", height: "200px" }}></div>
              <div class="card-body">
                <button
                  style={{
                    marginLeft: "2px",
                    marginTop: "2px",
                    background: "#D6FCD0",
                  }}
                  type="button"
                  class="btn"
                >
                   <Link
                    to="/labourCompanyProfile"
                    type="button"
                  >
                    View
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pagination">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a style={{ border: "none" }} href="#">
            /
          </a>
          <a style={{ border: "none" }} href="#">
            3
          </a>
          <a href="#">&raquo;</a>
        </div>
      </div>
    </>
  );
};

export default Demo;
// < div class="zoo" >
//         <div class="card" style={{ width: "18rem" }}>
//             <div style={{ backgroundColor: "green", height: "50px" }}></div>
//             <div class="card-body">
//                 <button type="button" class="btn btn-success">Success</button>
//             </div>
//         </div>
//         <div class="card" style={{ width: "18rem" }}>
//             <div style={{ backgroundColor: "green", height: "50px" }}></div>
//             <div class="card-body">
//                 <button type="button" class="btn btn-success">Success</button>
//             </div>
//         </div>
//         <div class="card" style={{ width: "18rem" }}>
//             <div style={{ backgroundColor: "green", height: "50px" }}></div>
//             <div class="card-body">
//                 <button type="button" class="btn btn-success">Success</button>
//             </div>
//         </div>
//     </ >
