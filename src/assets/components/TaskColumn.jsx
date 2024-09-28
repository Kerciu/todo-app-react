import React from "react";

import "./TaskColumn.css";

const TaskColumn = (props) => {
    return <section className='task-column'>
        <h2 className="task-column-heading">
            <img className="task-column-icon" src={props.icon} alt="Task status image" />{props.title}
        </h2>
    </section>
}

export default TaskColumn;