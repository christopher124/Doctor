import React from "react";
import { Route } from "react-router-dom";

// components

import Sidebar from "../components/sidebar/SideBar";

// views

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        {/* Header */}
        <div className="px-4 md:px-10 mx-auto w-full -m-24"></div>
      </div>
    </>
  );
}
