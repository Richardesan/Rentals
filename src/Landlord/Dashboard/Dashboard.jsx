import React from "react";
import Sidebar from "./component/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./component/navbar";

const Dashboard = () => {
  return (
    <section className="flex">
      <article className="w-fit">
        <Sidebar />
      </article>

      <article className="w-full h-screen overflow-y-auto px-12 py-5">
        <Navbar />
        <Outlet />
      </article>
    </section>
  );
};

export default Dashboard;
