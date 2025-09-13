import React from 'react';
import '../styles/doodle-theme.css';

const Home: React.FC = () => (
  <div className="doodle-box">
    <h1 className="doodle-title">🏪 Store Rating Application</h1>
    <p>
      Welcome to the doodle-themed Store Rating App!<br />
      <b>Features:</b>
      <ul>
        <li>Role-based authentication (Admin, User, Store Owner)</li>
        <li>Browse and rate stores (1-5 stars)</li>
        <li>Admin dashboard for user/store management</li>
        <li>Store owner analytics and customer insights</li>
        <li>Responsive, mobile-friendly doodle UI</li>
      </ul>
    </p>
    <p>
      <b>Tech Stack:</b> React, TypeScript, Context API, Custom CSS
    </p>
    <p>
      <b>Login as:</b> Admin, Store Owner, or register as a User to explore features.
    </p>
  </div>
);

export default Home;
