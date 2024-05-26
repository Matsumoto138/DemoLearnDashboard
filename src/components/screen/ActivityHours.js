import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function ActivityHoursComponent({ data }) {
  // data ve data.activity_hours var mı kontrol edelim
  if (!data || !Array.isArray(data.activity_hours)) {
    return <p>No activity hours data available.</p>;
  }

  return (
    <div className='Activity-Hours'>
        <h2>Activity Hours</h2>
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Exams Completed</TableCell>
                <TableCell align="right">Hours</TableCell>
                <TableCell align="right">Lessons Taken</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {data.activity_hours.map((activity, index) => (
                <TableRow key={index}>
                <TableCell component="th" scope="row">
                    {activity.date}
                </TableCell>
                <TableCell align="right">{activity.exams_completed}</TableCell>
                <TableCell align="right">{activity.hours}</TableCell>
                <TableCell align="right">{activity.lessons_taken}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}

export default ActivityHoursComponent;
