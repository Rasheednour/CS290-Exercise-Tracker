import React from 'react';
import '../App.css';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const EditPage = ({exerciseToEdit}) => {
  const [name, setName] = useState(exerciseToEdit.name);
  const [reps, setReps] = useState(exerciseToEdit.reps);
  const [weight, setWeight] = useState(exerciseToEdit.weight);
  const [unit, setUnit] = useState(exerciseToEdit.unit);
  const [date, setDate] = useState(new Date(exerciseToEdit.date));
  const history = useHistory();

  const editExercise = async () => {
    const editedExercise = {name, reps, weight, unit, date}
    const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
      method: "PUT",
      body: JSON.stringify(editedExercise),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if(response.status === 200){
      alert("Successfully edited the exercise");
    } else{
      alert(`Failed to edit exercise, status code = ${response.status}`)
    }
    history.push("/");
  };

  return (
    <div>
        <h1>
          Edit Exercise
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
                value = {unit}
                onChange= {e => setUnit(e.target.value)}
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
              />
            </td>
          </tr>
        </tbody>
        </table>
        <button className="button1"
        onClick={editExercise}>
          Save
          </button>
    </div>
  );
}


export default EditPage;