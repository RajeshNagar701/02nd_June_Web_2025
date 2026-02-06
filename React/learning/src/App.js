import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./website/component/Header";
import Footer from "./website/component/Footer";
import Home from "./website/pages/Home";
import About from "./website/pages/About";
import Contact from "./website/pages/Contact";
import Shop from "./website/pages/Shop";
import Shop_single from "./website/pages/Shop_single";
import Login from "./website/pages/Login";
import Signup from "./website/pages/Signup";
import Dashboard from "./website/pages/About";
import AHeader from "./admin/component/AHeader";
import AFooter from "./admin/component/AFooter";
import Admin_login from "./admin/pages/Admin_login";
import Add_categories from "./admin/pages/Add_categories";
import Manage_categories from "./admin/pages/Manage_categories";
import Add_product from "./admin/pages/Add_product";
import Manage_product from "./admin/pages/Manage_product";
import Manage_contact from "./admin/pages/Manage_contact";
import Manage_customer from "./admin/pages/Manage_customer";
import User_profile from "./website/pages/User_profile";
import Edit_profile from "./website/pages/Edit_profile";
import After_u from "./website/component/After_u";
import Before_u from "./website/component/Before_u";
import After_a from "./admin/component/After_a";
import Before_a from "./admin/component/Before_a";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div >
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<><Header /><Home /><Footer /></>}></Route>
          <Route path="/about" element={<><Header /><About /><Footer /></>}></Route>
          <Route path="/contact" element={<><Header /><Contact /><Footer /></>}></Route>
          <Route path="/shop" element={<><Header /><Shop /><Footer /></>}></Route>
          <Route path="/shop_single/:id" element={<><Header /><Shop_single /><Footer /></>}></Route>

          <Route element={<Before_u />}>
            <Route path="/login" element={<><Header /><Login /><Footer /></>}></Route>
            <Route path="/signup" element={<><Header /><Signup /><Footer /></>}></Route>
          </Route>
          <Route element={<After_u />}>
            <Route path="/user_profile" element={<><Header /><User_profile /><Footer /></>}></Route>
            <Route path="/edit_profile/:id" element={<><Header /><Edit_profile /><Footer /></>}></Route>
          </Route>

          <Route element={<Before_a />}>
            <Route path="/admin-login" element={<><Admin_login /></>}></Route>
          </Route>

          <Route element={<After_a />}>
            <Route path="/dashboard" element={<><AHeader /><Dashboard /><AFooter /></>}></Route>
            <Route path="/add_categories" element={<><AHeader /><Add_categories /><AFooter /></>}></Route>
            <Route path="/manage_categories" element={<><AHeader /><Manage_categories /><AFooter /></>}></Route>
            <Route path="/add_product" element={<><AHeader /><Add_product /><AFooter /></>}></Route>
            <Route path="/manage_product" element={<><AHeader /><Manage_product /><AFooter /></>}></Route>
            <Route path="/manage_contact" element={<><AHeader /><Manage_contact /><AFooter /></>}></Route>
            <Route path="/manage_customer" element={<><AHeader /><Manage_customer /><AFooter /></>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
