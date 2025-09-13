import React from 'react';
import '../styles/doodle-theme.css';

const OwnerDashboard: React.FC = () => (
  <div className="doodle-box">
    <h2 className="doodle-title">Store Owner Dashboard</h2>
    <p>
      View your store's performance, customer ratings, and analytics.<br />
      <b>Features:</b>
    </p>
    <ul>
      <li>Average rating and total reviews</li>
      <li>Customer insights</li>
      <li>Performance metrics and trends</li>
    </ul>
  </div>
);

export default OwnerDashboard;
