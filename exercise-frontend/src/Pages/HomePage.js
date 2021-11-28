import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="h1">
          Exercise Tracker!
        </h1>
        <h2>
            <Link to="/create-exercise" className="button1">
            Create exercise
            </Link>
        </h2>
      </header>
    </div>
  );
}

export default HomePage;