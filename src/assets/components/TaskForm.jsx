import React from "react";

import "./TaskForm.css";

const TaskForm = () => {
    return <header className="app-header">
        <form>
            <input type="text" className="task-input" placeholder="Enter your task"/>

            <div className="task-form-bottom-line">
                <div>
                    <select className="task-status">
                        <option value="todo">To do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <div>
                    <button type="submit" className="task-submit"> + Add Task</button>
                </div>
            </div>
        </form>
    </header>
}

export default TaskForm;