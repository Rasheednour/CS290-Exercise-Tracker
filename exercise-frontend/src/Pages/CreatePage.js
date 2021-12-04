import React from 'react';
import '../App.css';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const CreatePage = () => {
  const [name, setName] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('kg');
  const [date, setDate] = useState(null);
  const history = useHistory();

  const addExercise = async () => {
    const newExercise = {name, reps, weight, unit, date}
    const response = await fetch('/exercises', {
      method: "POST",
      body: JSON.stringify(newExercise),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if(response.status === 201){
      alert("Successfully added the exercise");
    } else{
      alert(`Failed to add exercise, status code = ${response.status}`)
    }
    history.push("/");
  };

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
              <select
                value={unit}
                onChange={e => setUnit(e.target.value)}
              >
                <option value="kg">kg</option>
                <option value="lbs">lbs</option>
              </select>
            </td>
            <td>
              <DatePicker
                selected={date}
                onChange={d => {
                  d.setHours((-1 * d.getTimezoneOffset())/60);
                  setDate(d);}}
                placeholderText="Select a date"
              />
            </td>
          </tr>
        </tbody>
        </table>
        <button className="button1"
        onClick={addExercise}>
          Add Exercise
          </button>
    </div>
  );
}

export default CreatePage;