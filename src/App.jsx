import React from "react";
import Sidebar from "./assets/SideBar";
import TopBar from "./assets/TopBar";
import FeatureGrid from "./assets/FeatureGrid";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <TopBar />
        <FeatureGrid />
      </div>
    </div>
  );
}

export default App;
