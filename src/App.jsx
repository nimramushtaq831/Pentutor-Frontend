import React from "react";
import Sidebar from "./assets/SideBar";
import TopBar from "./assets/TopBar";
import FeatureGrid from "./assets/FeatureGrid";
import TeamsCalendar from "./assets/team-membering";

function App() {
  return (
    <div>
      {/* <Sidebar />
      <div className="flex flex-col flex-1">
        <TopBar />
        <FeatureGrid />
      </div> */}
      <TeamsCalendar/>
    </div>
  );
}

export default App;
