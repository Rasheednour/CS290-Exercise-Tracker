import React from 'react';
import '../App.css';


function CreatePage() {
  return (
    <div>
        <h1 className="h1">
          Create new exercise!
        </h1>
        <table id="exercises">
        <thead>
            <tr>
                <th>Name</th>
                <th>Reps</th>
                <th>Weight</th>
                <th>Unit</th>
                <th>Date</th>
            </tr>
        </thead>
        </table>
    </div>
  );
}

export default CreatePage;