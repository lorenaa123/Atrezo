import React, {useState} from "react";
import SideBar from "./sidebar/SideBar";
import Content from "./content/Content";
import {BrowserRouter as Router} from "react-router-dom";
import '../styles/custom.css';

export const MainPanel = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  return (
    <>
      <Router>
        <div className="App wrapper">
          <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen}/>
          <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen}/>
        </div>
      </Router>
    </>
  )
}
