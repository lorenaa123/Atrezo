import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import {useState} from "react";
import Content from "./components/content/Content";

function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  return (
    <Router>
      <div className="App wrapper">
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen}/>
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen}/>
      </div>
    </Router>
  );
}

export default App;
