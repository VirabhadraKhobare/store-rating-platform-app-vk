import React from 'react';
import '../styles/doodle-theme.css';

const Dashboard: React.FC = () => (
  <div className="doodle-box">
    <h2 className="doodle-title">Dashboard</h2>
    <p>
      <b>System Admin:</b> View total users, stores, ratings, add/manage users and stores.<br />
      <b>Normal User:</b> See your rating stats, browse and rate stores.<br />
      <b>Store Owner:</b> View store analytics, customer feedback, and performance metrics.
    </p>
    <ul>
      <li>Role-based dashboard content</li>
      <li>Store and user statistics</li>
      <li>Rating analytics and trends</li>
      <li>Mobile-friendly doodle UI</li>
    </ul>
  </div>
);

export default Dashboard;
