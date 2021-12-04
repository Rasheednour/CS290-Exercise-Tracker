import React from "react";
import { MdDeleteForever as Delete} from 'react-icons/md';
import { MdEdit as Edit} from 'react-icons/md';
import moment from 'moment';

function Exercise({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{moment(exercise.date).format('MM-DD-YYYY')}</td>
            <td className="deleteIcon"><Delete onClick={ () => onDelete(exercise._id)}/></td>
            <td className="editIcon"><Edit onClick={ () => onEdit(exercise)}/></td>
        </tr>
    )
}

export default Exercise;