import React from "react";

import "./TaskForm.css";

const TaskForm = () => {
    return <header className="app-header">
        <form>
            <input type="text" className="task-input" placeholder="Enter your tags"/>

            <div className="task-form-bottom-line">
                <select className="tast-status">
                    <option value="todo">To do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>

                <button type="submit" className="task-submit"> + Add Task</button>
            </div>
        </form>
    </header>
}

export default TaskForm;