import Score from "../../images/icons/score.png";
import Completed from "../../images/icons/checked.png";
import Staff from "../../images/icons/staff.png";

export default function ScreenHeadline({ data }) {
  return (
    <div className="Screen-Headline">
      <div className="Stats">
        <div className="Stats-Image">
          <img src={Score} alt="" />
        </div>
        <div className="Stats-Text">
          <h2>{data?.average_employee_score ?? "No data available"}</h2>
          <h6>Avarage Employee Score</h6>
        </div>
      </div>
      <div className="Stats">
        <div className="Stats-Image">
          <img src={Completed} alt="" />
        </div>
        <div className="Stats-Text">
          <h2>{data?.total_completed_courses ?? "No data available"}</h2>
          <h6>Total Completed Courses</h6>
        </div>
      </div>
      <div className="Stats">
        <div className="Stats-Image">
          <img src={Staff} alt="" />
        </div>
        <div className="Stats-Text">
          <h2>{data?.total_employees ?? "No data available"}</h2>
          <h6>Total Employees</h6>
        </div>
      </div>
    </div>
  );
}
