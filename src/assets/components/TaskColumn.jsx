import React from "react";
import TaskCard from "./TaskCard"

import "./TaskColumn.css";

const TaskColumn = (props) => {
    const {title, icon, tasks, status} = props;

    console.log(tasks, status);

    return <section className='task-column'>
        <h2 className="task-column-heading">
            <img className="task-column-icon" src={icon} alt="Task status image" />{title}
        </h2>

        {
            tasks.map((task, idx) => (
                task.status === status ? (
                    <TaskCard key={idx} title={task.task} />
                  ) : null
            ))
        }
    </section>
}

export default TaskColumn;