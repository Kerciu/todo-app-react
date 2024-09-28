import React from "react";

import "./TaskColumn.css";

const TaskColumn = (props) => {
    const {title, icon} = props;

    return <section className='task-column'>
        <h2 className="task-column-heading">
            <img className="task-column-icon" src={icon} alt="Task status image" />{title}
        </h2>
    </section>
}

export default TaskColumn;