import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";
import EditPage from "./Pages/EditPage";
import { useState } from 'react';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
        <Router>
          <div className="App-header">
            <Route path="/" exact>
              <HomePage setExerciseToEdit={setExerciseToEdit}/>
            </Route>
            <Route path="/create-exercise">
              <CreatePage />
            </Route>
            <Route path="/edit-exercise">
              <EditPage exerciseToEdit={exerciseToEdit} />
            </Route>
          </div>
        </Router>
    </div>
  );
}

export default App;
