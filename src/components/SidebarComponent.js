import { Groups, Home, Person, School, Settings } from "@mui/icons-material";

export default function SidebarComponent(){
    return(
        <div className="Sidebar-Container">
            <div className="Logo">
                <h1>DemoLearn</h1>
            </div>
            <div className="Menu">
                <ul>
                    <li style={{display:"flex", alignItems:"center", gap:"10px"}}><Home/> <a href="">Home</a></li>
                    <li style={{display:"flex", alignItems:"center", gap:"10px"}}><Groups/> <a href="">Teams</a></li>
                    <li style={{display:"flex", alignItems:"center", gap:"10px"}}><School/> <a href="">Courses</a></li>
                    <li style={{display:"flex", alignItems:"center", gap:"10px"}}><Person/> <a href="">Employees</a></li>
                    <li style={{display:"flex", alignItems:"center", gap:"10px"}}><Settings/> <a href="">Settings</a></li>
                </ul>
            </div>
        </div>
    )
}

