import React from 'react';
import '../styles/doodle-theme.css';

const AdminPanel: React.FC = () => (
  <div className="doodle-box">
    <h2 className="doodle-title">Admin Panel</h2>
    <p>
      Manage users, stores, and view platform statistics.<br />
      <b>Features:</b>
      <ul>
        <li>Add new users and stores</li>
        <li>View and filter users/stores</li>
        <li>Store analytics and feedback</li>
      </ul>
    </p>
  </div>
);

export default AdminPanel;
