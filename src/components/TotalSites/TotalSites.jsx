import React from "react";
import "./TotalSites.css";
import filter from "../Icons/filter.svg";
import edit from "../Icons/edit.png";

const TotalSite = () => {
  return (
    <>
      <h1 class="header011">
        <span class="header_text011">Total Site</span>
      </h1>


      
      {/* <div>
                <div class="row">
                    <div class="col-8">

                        <label class="lacnn11">Site</label>
                        <img class="imgnn11" src={filter} alt="" />
                        <input class="inn11" type="text" placeholder='Enter Site' />

                    </div>
                    <div class="col">
                        <button type="button" class="btncc11" style={{ backgroundColor: "#D6FCD0", width: "230px", height: "60px", border: "none", borderRadius: "10px" }}>Site Registration <img style={{ padding: "10px" }} src={edit} alt="" /></button>
                    </div>
                </div>
            </div> */}
      <div className="row" style={{ marginLeft: "0px" }}>
        <div class="d-flex justify-content-center align-items-center mt-3 mb-3 col-lg-10 col-md-8 col-sm-12">
          <span style={{ fontSize: "18px" }}>
            <img class="imgnn11" src={filter} alt="" />
            Site
            <input type="text" class="inn11" placeholder="Enter Site" />
          </span>
        </div>
        <div class="d-flex justify-content-end align-items-center mt-3 mb-3 col-lg-2 col-md-4 col-sm-12">
          <button
            type="submit"
            id="add-site-btn"
            class="py-1 btn profile-page-btn-12 mr-4"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            style={{
              boxShadow: "rgb(174 168 168) 0px 3px 6px",
              borderRadius: "5px",
              width: "150px",
              marginLeft: "0px",
              background: "rgba(214, 252, 208, 1)",
            }}
          >
            Site Registration
            <img src={edit} alt="" />
          </button>
        </div>
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
                  View
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
                  View
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
                  View
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
                  View
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
                  View
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
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination">
          <a href="/yetToCome">&laquo;</a>
          <a href="/yetToCome">1</a>
          <a style={{ border: "none" }} href="/yetToCome">
            /
          </a>
          <a style={{ border: "none" }} href="/yetToCome">
            3
          </a>
          <a href="/yetToCome">&raquo;</a>
        </div>
      </div>
    </>
  );
};
export default TotalSite;
