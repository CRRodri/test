import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainPg from "./MainPg";
import Signin from "./Signin";
import Signup from "./Signup";
import Visitorpage from "./Visitorpage";
import Maintenance from "./Maintenance";

function MainRoutes() {
  return (
    <BrowserRouter>
        <Routes> 
          <Route path="/" element={<MainPg />} />
          <Route path="/Signin" element={<Signin />} /> 
          <Route path="/Signup" element={<Signup />} /> 
          <Route path="/Visitorpage" element={<Visitorpage />} />
          <Route path="/Maintenance" element={<Maintenance />} />
        </Routes>
      </BrowserRouter>
  );
}

export default MainRoutes;