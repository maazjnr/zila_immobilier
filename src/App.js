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
import CreateAcc from "./auth/CreateAcc";
import Login from "./auth/Login";


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
    </Route>
    <Route path={'*'} element={<Error />} />
  </Routes>
  )
}

export default App;

//https://dribbble.com/shots/17887032-Estatery-Rent-Page
//https://dribbble.com/shots/19127610-Real-Estate-Landing-Page