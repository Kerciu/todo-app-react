import React from "react";
import deleteIcon from "../images/delete.png";

import './TaskCard.css';

const TaskCard = ({title, handleDelete, idx}) => {
    return (
        <article className="task-card">
            <p className="task-text">{title}</p>

            <div className="task-card-bottom-line">
                <div className="task-delete" onClick={() => handleDelete(idx)}>
                    <img className="delete-icon" src={deleteIcon} alt="Delete Icon" />
                </div>
            </div>
        </article>
    )
}

export default TaskCard;