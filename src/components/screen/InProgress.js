import React from 'react';
import { Card, CardContent, Typography, Grid, CardHeader, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

function InProgressCoursesComponent({ data }) {
  if (!data || !Array.isArray(data.in_progress_courses)) {
    return <p>No in-progress courses data available.</p>;
  }

  return (
    <div className='In-Progress'>
        <h2>In Progress Courses</h2>
      {data.in_progress_courses.map((course, index) => (
        <Grid style={{margin:"10px 0"}} item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardHeader
              avatar={
                <Avatar>
                  <PersonIcon />
                </Avatar>
              }
              title={course.title}
              subheader={`Assigned to: ${course.assigned_to}`}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {course.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Due Date:</strong> {course.due_date}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Status:</strong> {course.status}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </div>
  );
}

export default InProgressCoursesComponent;
