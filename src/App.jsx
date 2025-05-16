import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppRoutes } from "./utils/route";
import Home from "./Home/Home";
import Signup from "./Signup/signup";
import Login from "./Login/Login";

function Layout() {
  return (
    <Routes>
      {/* Home */}
      <Route path={AppRoutes.home} element={<Home />} />
      <Route path={AppRoutes.signup} element={<Signup />} />

      <Route path={AppRoutes.login} element={<Login />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
     <Layout />
    </BrowserRouter>
  );
}
