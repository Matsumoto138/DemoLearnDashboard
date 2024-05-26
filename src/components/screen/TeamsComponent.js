import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import React, { useState } from "react";
import Person from '../../images/icons/user.png';

function TeamsComponent({ data }) {
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);

  return (
    <div className="Teams-Component">
      <h2>Teams</h2>
      <div className="Teams-Buttons">
        {Array.isArray(data.teams) &&
          data.teams.map((team, index) => (
            <button
              key={index}
              onClick={() => setActiveTeamIndex(index)}
              className={activeTeamIndex === index ? "active" : ""}
            >
              {team.title}
            </button>
          ))}
      </div>

      {Array.isArray(data.teams) && data.teams.length > 0 && (
        <div className="Teams-Card">
          <h2>{data.teams[activeTeamIndex].title}</h2>
          {/* <p className="Team-Description">{data.teams[activeTeamIndex].description}</p> */}
          {Array.isArray(data.teams[activeTeamIndex].employees) &&
            data.teams[activeTeamIndex].employees.map((employee, employeeIndex) => (
              <Accordion key={employeeIndex}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <div className="Teams-Employee-Card">
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <img src={Person} alt="" style={{ width: "7%" }} />
                      <div className="Information">
                        <div className="Name">
                          <h3>{employee.name}</h3>
                          <p>&nbsp; {employee.title}</p>
                        </div>
                        <div className="Email">
                          <p>{employee.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="Score">
                      <h3>
                        {employee.current_score}{" "}
                        <span style={{ fontSize: "12px", opacity: "0.5" }}>
                          score
                        </span>
                      </h3>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    <strong>Lessons Taken:</strong> {employee.lessons_taken}
                  </p>
                  <p>
                    <strong>Skills Being Developed:</strong>{" "}
                    {employee.skills_being_developed.join(", ")}
                  </p>
                </AccordionDetails>
              </Accordion>
            ))}
        </div>
      )}
    </div>
  );
}

export default TeamsComponent;
