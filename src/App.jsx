import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppRoutes } from "./utils/route";
import Home from "./Home/Home";

function Layout() {
  return (
    <Routes>
      {/* Home */}
      <Route path={AppRoutes.home} element={<Home />} />
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
