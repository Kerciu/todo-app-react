import React from "react";
import TaskCard from "./TaskCard"

import "./TaskColumn.css";

const TaskColumn = (props) => {
    const {title, icon} = props;

    return <section className='task-column'>
        <h2 className="task-column-heading">
            <img className="task-column-icon" src={icon} alt="Task status image" />{title}
        </h2>

        <TaskCard />
    </section>
}

export default TaskColumn;