import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

function TopSkills({data}) {
  return (
    <div className='Top-Skills'>
        <h2 style={{margin:"10px 0"}}>Top Skills</h2>
        {data.top_skills && data.top_skills.map((skill) => (
            <div style={{margin:"10px 0", width:"70%"}}>
                <p style={{margin:"5px 0"}}>{skill.skill}</p>
                <ProgressBar completed={skill.employees} maxCompleted={5} customLabel={skill.employees} height='25px' bgColor='#293fac' />
            </div>
        ))}
    </div>
  )
}

export default TopSkills