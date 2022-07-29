import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import MallOwnerLists from "./components/MallOwnerLists/MallOwnerLists";
import MallOwnerProfile from "./components/MallOwnerProfile/MallOwnerProfile";
import MallOwnerRegistration from "./components/MallOwnerRegistration/MallOwnerRegistration";
import TotalParking from "./components/TotalParking/TotalParking";
import SiteRegisteration from "./components/SiteRegisteration/SiteRegisteration";
import TotalRevenue from "./components/TotalRevenue/TotalRevenue";
import TotalSite from "./components/TotalSites/TotalSites";
import CustomerReview from "./components/CustomerReview/CustomReview";
import LabourCompanyList from "./components/LabourCompany/LabourCompanyList/LabourCompanyList";
import LabourCompanyRegistration from "./components/LabourCompany/LabourCompanyRegistration/LabourCompanyRegistration";
import LabourCompanyGuardList from "./components/LabourCompany/LabourCompanyGuardList/LabourCompanyGuardList";
import PaymentClosingHistory from "./components/LabourCompany/PaymentClosingHistory/PaymentClosingHistory";
import LabourCompanyProfile from "./components/LabourCompany/LabourCompanyProfile/LabourCompanyProfile";
import Advertise from "./components/Advertise/Advertise";
import UserManagement from "./components/UserManagement/UserManagement";
import AreaManagerList from "./components/AreaManager/AreaManagerList/AreaManagerList";
import AreaManagerProfile from "./components/AreaManager/AreaManagerProfile/AreaManagerProfile";
import AreaManagerRegistration from "./components/AreaManager/AreaManagerRegistration/AreaManagerRegistration";
import UserTotalBooking from "./components/UserTotalBooking/UserTotalBooking";
import UserTotalPayment from "./components/UserTotalPayment/UserTotalPayment";

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      <LoadingBar color="#f11946" height={3} progress={progress} />
      <Navbar></Navbar>
      <Sidebar></Sidebar>

      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Dashboard setProgress={setProgress} />}
          />
          <Route
            exact
            path="/dashboard"
            element={<Dashboard setProgress={setProgress} />}
          />
          <Route
            exact
            path="/mallOwnerLists"
            element={<MallOwnerLists setProgress={setProgress} />}
          />
          <Route
            exact
            path="/mallOwnerProfile"
            element={<MallOwnerProfile setProgress={setProgress} />}
          />
          <Route
            exact
            path="/mallOwnerRegistration"
            element={<MallOwnerRegistration setProgress={setProgress} />}
          />
          <Route
            exact
            path="/totalparking"
            element={<TotalParking setProgress={setProgress} />}
          />
          <Route
            exact
            path="/siteregisteration"
            element={<SiteRegisteration setProgress={setProgress} />}
          />
          <Route
            exact
            path="/totalrevenue"
            element={<TotalRevenue setProgress={setProgress} />}
          />
          <Route
            exact
            path="/totalsites"
            element={<TotalSite setProgress={setProgress} />}
          />
          <Route
            exact
            path="/customerReview"
            element={<CustomerReview setProgress={setProgress} />}
          />
          <Route
            exact
            path="/labourCompanyList"
            element={<LabourCompanyList setProgress={setProgress} />}
          />
          <Route
            exact
            path="/advertise"
            element={<Advertise setProgress={setProgress} />}
          />
          <Route
            exact
            path="/userManagement"
            element={<UserManagement setProgress={setProgress} />}
          />
          <Route
            exact
            path="/areaManagerList"
            element={<AreaManagerList setProgress={setProgress} />}
          />
          <Route
            exact
            path="/areaManagerProfile"
            element={<AreaManagerProfile setProgress={setProgress} />}
          />
          <Route
            exact
            path="/areaManagerRegistration"
            element={<AreaManagerRegistration setProgress={setProgress} />}
          />
          <Route
            exact
            path="/labourCompanyRegistration"
            element={<LabourCompanyRegistration setProgress={setProgress} />}
          />
          <Route
            exact
            path="/labourCompanyGuardList"
            element={<LabourCompanyGuardList setProgress={setProgress} />}
          />
          <Route
            exact
            path="/paymentClosingHistory"
            element={<PaymentClosingHistory setProgress={setProgress} />}
          />
          <Route
            exact
            path="/labourCompanyProfile"
            element={<LabourCompanyProfile setProgress={setProgress} />}
          />
          <Route
            exact
            path="/deleteSite"
            element={<LabourCompanyProfile setProgress={setProgress} />}
          />
          <Route
            exact
            path="/userTotalBooking"
            element={<UserTotalBooking setProgress={setProgress} />}
          />
          <Route
            exact
            path="/userTotalPayment"
            element={<UserTotalPayment setProgress={setProgress} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
