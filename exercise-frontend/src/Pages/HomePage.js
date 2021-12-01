import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import ExerciseList from '../Components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {

  const [exercises, setExercises ] = useState([]);

  const loadExercises = async () => {
    const response = await fetch('/exercises');
    const exercises = await response.json();
    setExercises(exercises);
  }

  useEffect(() => {
    loadExercises();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="h1">
          Exercise Tracker!
        </h1>
        <h2> List of Exercises 
            <ExerciseList exercises={exercises}></ExerciseList>
            <Link to="/create-exercise" className="button1">
            Create exercise
            </Link>
        </h2>
      </header>
    </div>
  );
}

export default HomePage;