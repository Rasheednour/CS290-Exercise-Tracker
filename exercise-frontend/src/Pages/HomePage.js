import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import ExerciseList from '../Components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({ setExerciseToEdit }) {

  const [exercises, setExercises] = useState([]);
  const history = useHistory();

  const onDelete = async _id => {
    const response = await fetch(`/exercises/${_id}`, { method: 'DELETE'});
    if(response.status === 204){
      console.log(response.status)
      setExercises(exercises.filter(e => e._id !== _id));
    } else {
      console.error(`Failed to delete movie with _id = ${_id}, status code = ${response.status}`)
    }
  };

  const onEdit = exercise => {
    setExerciseToEdit(exercise);
    history.push("/edit-exercise");
  };

  const loadExercises = async () => {
    const response = await fetch('/exercises');
    const exercises = await response.json();
    setExercises(exercises);
  };

  useEffect(() => {
    loadExercises();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Exercise Tracker
        </h1>
        <h2> List of Exercises 
            <ExerciseList exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseList>
            <Link to="/create-exercise" className="button1">
            Create exercise
            </Link>
        </h2>
      </header>
    </div>
  );
}

export default HomePage;