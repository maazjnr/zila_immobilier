import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Error from "./components/Error";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact_Us from "./pages/Contact_Us";
import Home from "./pages/Home";
import About_Us from "./pages/About_Us";
import Services from "./pages/Services";
import Properties from "./pages/Properties";
import Agents from "./pages/Agents";
import CreateAcc from "./auth/CreateAcc";
import Login from "./auth/Login";
import BuyProperty from "./components/Buy/BuyProperty"
import RentProperty from "./components/Rent/RentProperty"
import PropertyDetails from "./components/Property/PropertyDetails";
import AgentPropertyList from "./components/AgentList/AgentPropertyList";
import AgentRegister from "./auth/AgentRegister";
import AgentLogin from "./auth/AgentLogin";
import UserDashboard from "./components/DashBoard/UserDashboard/UserDashboard";
import SavedProperty from './components/Property/SavedProperty';
import UpdateAcc from "./auth/UpdateAcc";
import UpdatePass from "./auth/UpdatePass";
import AdminDashboard from "./components/DashBoard/AdminDashboard/AdminDashboard";
import Sell from "./components/Sell/Sell";

const App = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Routes>
    <Route path="/" element={<SharedLayout/>}>
      <Route index element={<Home />} />
      <Route path={'/about'} element={<About_Us />} />
      <Route path={'/contact'} element={<Contact_Us />} />
      <Route path={'/services'} element={<Services />} />
      <Route path={'/properties'} element={<Properties />} />
      <Route path={'/create'} element={<CreateAcc/>} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/buy'} element={<BuyProperty />} />
      <Route path={'/rent'} element={<RentProperty/>} />
      <Route path={'/agents'} element={ <Agents /> } />
      <Route path="/propertyDetails" element={<PropertyDetails />} />
      <Route path="/agentPropertyList" element={<AgentPropertyList />} />
      <Route path="/agentRegister" element={< AgentRegister />} />
      <Route path="/agentLogin" element={< AgentLogin />} />
      <Route path="/userDashboard" element={< UserDashboard />} />
      <Route path="/savedProperty" element={ <SavedProperty /> } />
      <Route path="/updateAcc" element={ < UpdateAcc /> } />
      <Route path="/updatePass" element={ < UpdatePass /> } />
      <Route path="/adminDashboard" element={ < AdminDashboard /> } />
      <Route path="/Sell" element={ < Sell /> } />
    </Route>
    <Route path={'*'} element={<Error />} />
  </Routes>
  )
}

export default App;

//https://dribbble.com/shots/17887032-Estatery-Rent-Page
//https://dribbble.com/shots/19127610-Real-Estate-Landing-Page