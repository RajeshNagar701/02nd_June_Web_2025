import { BrowserRouter, Route, Routes } from "react-router-dom";
import Haeder from "./website/component/Haeder";
import Footer from "./website/component/Footer";
import Home from "./website/pages/Home";
import About from "./website/pages/About";
import Contact from "./website/pages/Contact";
import Shop_single from "./website/pages/Shop_single";
import PNF from "./website/pages/PNF";
import Shop from "./website/pages/Shop";
import Signup from "./website/pages/Signup";
import Login from "./website/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import Admin_login from "./admin/pages/Admin_login";
import Add_categories from "./admin/pages/Add_categories";
import Manage_categories from "./admin/pages/Manage_categories";
import Add_product from "./admin/pages/Add_product";
import Manage_product from "./admin/pages/Manage_product";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Haeder/><Home/><Footer/></>} ></Route>
          <Route path="/about" element={<><Haeder/><About/><Footer/></>} ></Route>
          <Route path="/contact" element={<><Haeder/><Contact/><Footer/></>} ></Route>
          <Route path="/shop" element={<><Haeder/><Shop/><Footer/></>} ></Route>
          <Route path="/shop_single" element={<><Haeder/><Shop_single/><Footer/></>} ></Route>
          <Route path="*" element={<><Haeder/><PNF/><Footer/></>} ></Route>
          <Route path="/signup" element={<><Haeder/><Signup/><Footer/></>}></Route>
          <Route path="/login" element={<><Haeder/><Login/><Footer/></>}></Route>


          <Route path="/admin-login" element={<><Admin_login/></>}></Route>
          <Route path="/dashboard" element={<><Dashboard/></>}></Route>
          <Route path="/add_categories" element={<><Add_categories/></>}></Route>
          <Route path="/manage_categories" element={<><Manage_categories/></>}></Route>
          <Route path="/add_product" element={<><Add_product/></>}></Route>
          <Route path="/manage_product" element={<><Manage_product/></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
