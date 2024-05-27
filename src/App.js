import './App.css';
import SidebarComponent from './components/SidebarComponent';
import ScreenBody from './components/ScreenBody';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Menu, NotificationsNone, Person, Search } from '@mui/icons-material';
import { Drawer } from '@mui/material';

function App() {
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get("https://demotrainiq.com/case/dashboard");
      const value = response.data.data;

      if (response.status === 200) {
        setData(value);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const toggleDrawer = (status) => () => {
    setOpen(status);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="Sidebar">
        <SidebarComponent />
      </div>
      <div className="Screen">
        <header className="App-header">
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <button onClick={toggleDrawer(true)} className="mobile-menu-button">
              <Menu />
            </button>
            <h2>Dashboard</h2>
            <Drawer style={{width:"600px"}} open={open} onClose={toggleDrawer(false)}>
            <SidebarComponent/>
            </Drawer>
          </div>
          <div className="Header-Elements" style={{ display: "flex", gap: "10px" }}>
            <div><Search /></div>
            <div><NotificationsNone /></div>
            <div><Person /></div>
          </div>
        </header>
        <div className="ScreenBody">
          <ScreenBody data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
