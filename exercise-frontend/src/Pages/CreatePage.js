import React from 'react';
import '../App.css';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreatePage = () => {
  const [name, setName] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('');
  const [date, setDate] = useState('');

  const addExercise = async () => {

  }

  return (
    <div>
        <h1>
          Create new exercise!
        </h1>
        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Reps</th>
                <th>Weight</th>
                <th>Unit</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                placeholder="Enter exercise name here"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                placeholder="Enter number of reps here"
                value={reps}
                onChange={e => setReps(e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                placeholder="Enter weight here"
                value={weight}
                onChange={e => setWeight(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter weight unit here"
                value={unit}
                onChange={e => setUnit(e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                placeholder="Enter date here"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
        </table>
        <button
        onClick={addExercise}>
          Add Exercise
          </button>
    </div>
  );
}

export default CreatePage;