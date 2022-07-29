import React from "react";
import "./MallOwnerLists.css";
import $ from "jquery";
const MallOwnerLists = () => {
  // const [selectedDate, setSelectedDate] = useState(new Date());

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

  document.addEventListener("DOMContentLoaded", function (e) {
    $('[name="date"]')
      .datepicker({
        format: "dd/mm/yyyy",
      })
      .on("changeDate", function (e) {
        // do somwthing here
      });
  });

  return (
    <>
      <div
        className="container main12"
        style={{ padding: "7vh 7vw", backgroundColor: "white" }}
      >
        <div
          className="mb-3"
          style={{ textAlign: "center", width: "100%", paddingBottom: "14px" }}
        >
          <span
            className="pb-3"
            style={{
              fontSize: "xx-large",
              color: "#1093a4",
              paddingBttom: " 20px",
              paddingBottom: "20px",
              borderBottom: "1px solid #1093a4",
            }}
          >
            Mall Owner List
          </span>
        </div>

        <div className="searchingBar13">
          <form1 className="searching13 searchbox13">
            <button type="submit">Search</button>
            <input type="search" placeholder="Search..." />
          </form1>
        </div>
        <div className="overflow-auto fixTableHead mt-5">
          <table className="w-full">
            <thead style={{ height: "70px" }}>
              <tr>
                <th className="w-20 p-3 color-change font-semibold traking-wide text-center">
                  Sr.No
                </th>
                <th className="w-24 p-3 color-change font-semibold traking-wide text-center">
                  Name
                </th>
                <th className="w-24 p-3 color-change font-semibold traking-wide text-center">
                  Site Name
                </th>
                <th className="w-24 p-3 color-change font-semibold traking-wide text-center">
                  Mail
                </th>
                <th className="w-24 p-3 color-change font-semibold traking-wide text-center">
                  Mobile Number
                </th>
                <th className="w-24 p-3 color-change font-semibold traking-wide text-center">
                  Mall Profile
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr style={{ height: "40px" }}>
                <td className="traking-wide text-center">1</td>
                <td className="traking-wide text-center">Nazeed</td>
                <td className="traking-wide text-center">Random</td>
                <td className="traking-wide text-center">mail</td>
                <td className="traking-wide text-center">1001001</td>
                <td className="traking-wide text-center extending">
                  <button
                    type="button"
                    className="responsiveBtn1 respBtn1 btn btn-success "
                    style={{
                      fontSize: "x-small",
                      borderRadius: "12px",
                      backgroundColor: "#2beb0c",
                      fontWeight: "800",
                    }}
                  >
                    <div className="">
                      {" "}
                      <span className="large ">
                        <a href="mallOwnerProfile">View</a>
                      </span>
                    </div>
                  </button>
                </td>
              </tr>
              <tr style={{ height: "40px", backgroundColor: "#e2fcde" }}>
                <td className="traking-wide text-center">2</td>
                <td className="traking-wide text-center">Nazeed</td>
                <td className="traking-wide text-center">Random</td>
                <td className="traking-wide text-center">mail</td>
                <td className="traking-wide text-center">1001001</td>
                <td className="traking-wide text-center extending">
                  <button
                    type="button"
                    className="responsiveBtn1 respBtn1 btn btn-success "
                    style={{
                      fontSize: "x-small",
                      borderRadius: "12px",
                      backgroundColor: "#2beb0c",
                      fontWeight: "800",
                    }}
                  >
                    <div className="">
                      {" "}
                      <span className="large ">
                        <a href="mallOwnerProfile">View</a>
                      </span>
                    </div>
                  </button>
                </td>
              </tr>
              <tr style={{ height: "40px" }}>
                <td className="traking-wide text-center">3</td>
                <td className="traking-wide text-center">Nazeed</td>
                <td className="traking-wide text-center">Random</td>
                <td className="traking-wide text-center">mail</td>
                <td className="traking-wide text-center">1001001</td>
                <td className="traking-wide text-center extending">
                  <button
                    type="button"
                    className="responsiveBtn1 respBtn1 btn btn-success "
                    style={{
                      fontSize: "x-small",
                      borderRadius: "12px",
                      backgroundColor: "#2beb0c",
                      fontWeight: "800",
                    }}
                  >
                    <div className="">
                      {" "}
                      <span className="large ">
                        <a href="mallOwnerProfile">View</a>
                      </span>
                    </div>
                  </button>
                </td>
              </tr>
              <tr style={{ height: "40px", backgroundColor: "#e2fcde" }}>
                <td className="traking-wide text-center">4</td>
                <td className="traking-wide text-center">Nazeed</td>
                <td className="traking-wide text-center">Random</td>
                <td className="traking-wide text-center">mail</td>
                <td className="traking-wide text-center">1001001</td>
                <td className="traking-wide text-center extending">
                  <button
                    type="button"
                    className="responsiveBtn1 respBtn1 btn btn-success "
                    style={{
                      fontSize: "x-small",
                      borderRadius: "12px",
                      backgroundColor: "#2beb0c",
                      fontWeight: "800",
                    }}
                  >
                    <div className="">
                      {" "}
                      <span className="large ">
                        <a href="mallOwnerProfile">View</a>
                      </span>
                    </div>
                  </button>
                </td>
              </tr>
              <tr style={{ height: "40px" }}>
                <td className="traking-wide text-center">5</td>
                <td className="traking-wide text-center">Nazeed</td>
                <td className="traking-wide text-center">Random</td>
                <td className="traking-wide text-center">mail</td>
                <td className="traking-wide text-center">1001001</td>
                <td className="traking-wide text-center extending">
                  <button
                    type="button"
                    className="responsiveBtn1 respBtn1 btn btn-success "
                    style={{
                      fontSize: "x-small",
                      borderRadius: "12px",
                      backgroundColor: "#2beb0c",
                      fontWeight: "800",
                    }}
                  >
                    <div className="">
                      {" "}
                      <span className="large ">
                        <a href="mallOwnerProfile">View</a>
                      </span>
                    </div>
                  </button>
                </td>
              </tr>
              <tr style={{ height: "40px", backgroundColor: "#e2fcde" }}>
                <td className="traking-wide text-center">6</td>
                <td className="traking-wide text-center">Nazeed</td>
                <td className="traking-wide text-center">Random</td>
                <td className="traking-wide text-center">mail</td>
                <td className="traking-wide text-center">1001001</td>
                <td className="traking-wide text-center extending">
                  <button
                    type="button"
                    className="responsiveBtn1 respBtn1 btn btn-success "
                    style={{
                      fontSize: "x-small",
                      borderRadius: "12px",
                      backgroundColor: "#2beb0c",
                      fontWeight: "800",
                    }}
                  >
                    <div className="">
                      {" "}
                      <span className="large ">
                        <a href="mallOwnerProfile">View</a>
                      </span>
                    </div>
                  </button>
                </td>
              </tr>
              <tr style={{ height: "40px" }}>
                <td className="traking-wide text-center">7</td>
                <td className="traking-wide text-center">Nazeed</td>
                <td className="traking-wide text-center">Random</td>
                <td className="traking-wide text-center">mail</td>
                <td className="traking-wide text-center">1001001</td>
                <td className="traking-wide text-center extending">
                  <button
                    type="button"
                    className="responsiveBtn1 respBtn1 btn btn-success "
                    style={{
                      fontSize: "x-small",
                      borderRadius: "12px",
                      backgroundColor: "#2beb0c",
                      fontWeight: "800",
                    }}
                  >
                    <div className="">
                      {" "}
                      <span className="large ">
                        <a href="mallOwnerProfile">View</a>
                      </span>
                    </div>
                  </button>
                </td>
              </tr>
              <tr style={{ height: "40px", backgroundColor: "#e2fcde" }}>
                <td className="traking-wide text-center">8</td>
                <td className="traking-wide text-center">Nazeed</td>
                <td className="traking-wide text-center">Random</td>
                <td className="traking-wide text-center">mail</td>
                <td className="traking-wide text-center">1001001</td>
                <td className="traking-wide text-center extending">
                  <button
                    type="button"
                    className="responsiveBtn1 respBtn1 btn btn-success "
                    style={{
                      fontSize: "x-small",
                      borderRadius: "12px",
                      backgroundColor: "#2beb0c",
                      fontWeight: "800",
                    }}
                  >
                    <div className="">
                      {" "}
                      <span className="large ">
                        <a href="mallOwnerProfile">View</a>
                      </span>
                    </div>
                  </button>
                </td>
              </tr>
              <tr style={{ height: "40px" }}>
                <td className="traking-wide text-center">9</td>
                <td className="traking-wide text-center">Nazeed</td>
                <td className="traking-wide text-center">Random</td>
                <td className="traking-wide text-center">mail</td>
                <td className="traking-wide text-center">1001001</td>
                <td className="traking-wide text-center extending">
                  <button
                    type="button"
                    className="responsiveBtn1 respBtn1 btn btn-success "
                    style={{
                      fontSize: "x-small",
                      borderRadius: "12px",
                      backgroundColor: "#2beb0c",
                      fontWeight: "800",
                    }}
                  >
                    <div className="">
                      {" "}
                      <span className="large ">
                        <a href="mallOwnerProfile">View</a>
                      </span>
                    </div>
                  </button>
                </td>
              </tr>
              <tr style={{ height: "40px", backgroundColor: "#e2fcde" }}>
                <td className="traking-wide text-center">10</td>
                <td className="traking-wide text-center">Nazeed</td>
                <td className="traking-wide text-center">Random</td>
                <td className="traking-wide text-center">mail</td>
                <td className="traking-wide text-center">1001001</td>
                <td className="traking-wide text-center extending">
                  <button
                    type="button"
                    className="responsiveBtn1 respBtn1 btn btn-success "
                    style={{
                      fontSize: "x-small",
                      borderRadius: "12px",
                      backgroundColor: "#2beb0c",
                      fontWeight: "800",
                    }}
                  >
                    <div className="">
                      {" "}
                      <span className="large ">
                        <a href="mallOwnerProfile">View</a>
                      </span>
                    </div>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        <div className="borderBoxMallOwnerLists">
          <div className="pagination">
            <div className="border13">
              <a href="#previous">&lt;</a>
            </div>

            <a href="#current" className="noDecoration13">
              {" "}
              <div className="secondBorder13">
                <p>6 </p>{" "}
              </div>
            </a>

            <p> / 20 </p>

            <div className="border13">
              <a href="#next">&gt;</a>
            </div>
          </div>
      </div>
    </>
  );
};

export default MallOwnerLists;
