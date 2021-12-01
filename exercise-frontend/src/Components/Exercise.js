import React from "react";
import { MdDeleteForever as Delete} from 'react-icons/md';
import { MdEdit as Edit} from 'react-icons/md';

function Exercise({ exercise, onDelete }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><Delete onClick={ () => onDelete(exercise._id)}/></td>
            <td><Edit /></td>
        </tr>
    )
}

export default Exercise;