import React from "react";
import classNames from "classnames";
import {Container} from "reactstrap";
import {Route, Routes} from "react-router-dom";

import Topbar from "./Topbar";
import {Dashboard} from "../../views/Dashboard";

const Content = ({sidebarIsOpen, toggleSidebar}) => (
  <div className={classNames("content", {"is-open": sidebarIsOpen})}
  >
    <Topbar toggleSidebar={toggleSidebar}/>
    <div className="px-3">
      <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/about" element={() => "About"}/>
        <Route exact path="/Pages" element={() => "Pages"}/>
        <Route exact path="/faq" element={() => "FAQ"}/>
        <Route exact path="/contact" element={() => "Contact"}/>
        <Route exact path="/Home-1" element={() => "Home-1"}/>
        <Route exact path="/Home-2" element={() => "Home-2"}/>
        <Route exact path="/Home-3" element={() => "Home-3"}/>
        <Route exact path="/Page-1" element={() => "Page-1"}/>
        <Route exact path="/Page-2" element={() => "Page-2"}/>
        <Route exact path="/page-1" element={() => "page-1"}/>
        <Route exact path="/page-2" element={() => "page-2"}/>
        <Route exact path="/page-3" element={() => "page-3"}/>
        <Route exact path="/page-4" element={() => "page-4"}/>
      </Routes>
    </div>
  </div>
);

export default Content;
