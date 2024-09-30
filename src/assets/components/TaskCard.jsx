import React from "react";
import deleteIcon from "../images/delete.png";

import './TaskCard.css';

const TaskCard = (props) => {
    return (
        <article className="task-card">
            <p className="task-text">Lorem ipsum dolor sit amet.</p>

            <div className="task-card-bottom-line">
                <div className="task-delete"><img className="delete-icon" src={deleteIcon} alt="Delete Icon" /></div>
            </div>
        </article>
    )
}

export default TaskCard;