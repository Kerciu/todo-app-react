import React from "react";
import Todo from "../assets/images/direct-hit.png";

import "./TaskColumn.css";

const TaskColumn = () => {
    return <section className='task-column'>
        <h2 className="task-column-heading">
            <img className="task-column-icon" src={Todo} alt="Direct hit image" />To do
        </h2>
    </section>
}

export default TaskColumn;