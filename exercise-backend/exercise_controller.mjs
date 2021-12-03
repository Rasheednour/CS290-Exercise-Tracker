'use strict'
import express from "express";
import * as exercises from './exercise_model.mjs'

const app = express();
const PORT = 3000;

app.use(express.json())
    .use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("Assignment 6");
});

app.post("/exercises", (req, res) => {
    exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
            .then(exercise => {
                res.status(201).json(exercise);
            })
            .catch(error => {
                console.error(error);
                res.status(400).json({ Error: 'Request failed'});
            });
});

app.get("/exercises", (req, res) => {
    let filter = {};
    exercises.findExercises(filter, '', 0)
        .then(exercises => {
            res.status(200).json(exercises);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        });
});

app.put("/exercises/:_id", (req, res) => {
    exercises.updateExercises(req.params._id, req.body.name, req.body.reps,
                            req.body.weight, req.body.unit, req.body.date)
             .then(() => {
                 res.status(200).json({_id: req.params._id, name: req.body.name,
                                        reps: req.body.reps, weight: req.body.weight,
                                        unit: req.body.unit, date: req.body.date})
             })
             .catch(error => {
                 console.error(error);
                 res.status(500).json({ Error: 'Request failed' });
             });
});

app.delete("/exercises/:_id", (req, res) => {
    exercises.deleteExercises(req.params._id)
            .then(() => {
                res.status(204).send();
            })
            .catch(error => {
                console.error(error);
                res.status(500).json({ Error: error });
            });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

