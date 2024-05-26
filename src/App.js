import './App.css';
import SidebarComponent from './components/SidebarComponent';
import ScreenBody from './components/ScreenBody';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { NotificationsNone, Person, Search } from '@mui/icons-material';

function App() {
  const [data, setData] = useState({});
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
  }

  useEffect(() => {
    getData();
  }, [])
  

  return (
    <div className="App">
      <div className="Sidebar">
        <SidebarComponent/>
      </div>
      <div className="Screen">
        <header className="App-header">
          <div><h2>Dashboard</h2></div>
          <div className="Header-Elements" style={{display:"flex", gap:"10px"}}>
            <div><Search/></div>
            <div><NotificationsNone/> </div>
            <div><Person/></div>
          </div>
        </header>
        <div className="Screen Body">
          <ScreenBody data={data} />
          
        </div>
      </div>
    </div>
  );
}

export default App;
