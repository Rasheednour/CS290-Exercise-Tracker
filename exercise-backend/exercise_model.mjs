'use strict'
import mongoose from 'mongoose';

mongoose.connect(
    'mongodb://localhost:27017/exercises_db',
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
});

const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true},
    reps: { type: Number, required: true},
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

// create new exercise
const createExercise = async (name, reps, weight, unit, date) => {
    const exercise = new Exercise({name: name, reps: reps, weight: weight, unit: unit, date: date});
    return exercise.save();
}

// get exercises
const findExercises = async (filter, projection, limit) => {
    const query = Exercise.find(filter)
        .select(projection)
        .limit(limit)
    return query.exec();
}

// update exercises 
const updateExercises = async (id, name, reps, weight, unit, date) => {
    const result = await Exercise.replaceOne({ _id: id},
        {name: name, reps: reps, weight: weight, unit: unit, date: date});
    return result.nModified;
}

//delete exercise
const deleteExercises = async (_id) => {
    await Exercise.deleteOne({ _id: _id });
}

export { createExercise, findExercises, updateExercises, deleteExercises };
