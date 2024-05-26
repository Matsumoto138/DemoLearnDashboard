import ActivityHoursComponent from "./screen/ActivityHours";
import InProgressCoursesComponent from "./screen/InProgress";
import ScreenHeadline from "./screen/ScreenHeadline";
import TeamsComponent from "./screen/TeamsComponent";
import TopEmployees from "./screen/TopEmployees";
import TopSkills from "./screen/TopSkills";
import UpcomingCoursesComponent from "./screen/UpcomingCourses";

export default function ScreenBody({data}){
    return(
        <div className="Screen-Body-Component">
            <div className="Left-Body">
            <ScreenHeadline data={data} />
            <TeamsComponent data={data} />
            <ActivityHoursComponent data={data} />
            <UpcomingCoursesComponent data={data} />
            </div>
            
            <div className="Right-Body">
            <TopEmployees data={data} />
            <TopSkills data={data} />
            <InProgressCoursesComponent data={data} />
            </div>
           
            
        </div>
    )
}