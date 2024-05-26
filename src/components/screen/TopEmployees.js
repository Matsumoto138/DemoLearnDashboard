import React from 'react'
import Person from '../../images/icons/user.png'

function TopEmployees({data}) {
  return (
    <div className='Top-Employees'>
        <h2>Top Employees</h2>
        {data.top_employees && data.top_employees.map((employee) => (
            <div className='Top-Employee-Card'>
                <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                    <img src={Person} alt="" style={{width:"7%"}} />
                    <div className="Information">
                        <div className="Name">
                            <h3>{employee.name}</h3>
                            <p>&nbsp; {employee.title}</p>
                        </div>
                        <div className="Email"><p>{employee.email}</p></div>
                    </div>
                </div>
                <div className="Score">
                    <h3>{employee.current_score} <span style={{fontSize:"12px", opacity:"0.5"}}>score</span></h3>
                </div>
            </div>
        ))}
    </div>
  )
}

export default TopEmployees