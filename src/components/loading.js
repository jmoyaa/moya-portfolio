import React from 'react';
import './loading.css'; 

const Loading = () => {
  return (
    <div className="loading-wrapper">
       <div className="loading-logo">
          <img className="loading-logo" src="moya-logo.png" alt="Moya Logo" />
        </div>
      <h2> Welcome, Please Wait..</h2>
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};

export default Loading;
