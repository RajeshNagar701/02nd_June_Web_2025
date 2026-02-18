import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./feature/website/pages/Dashboard";
import Add_user from "./feature/website/pages/Add_user";
import Manage_user from "./feature/website/pages/Manage_user";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/add_user" element={<Add_user />}></Route>
          <Route path="/manage_user" element={<Manage_user />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
