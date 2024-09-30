import React, {useState} from "react";

import "./TaskForm.css";

const TaskForm = () => {

    const [task, setTask] = useState("");
    const [status, setStatus] = useState("To do");

    const handleTaskChange = (e) => {
        setTask(e.target.value)
    };

    const handleStatusChange = (e) => {
        setStatus(e.target.value)
    };

    return <header className="app-header">
        <form>
            <input type="text" className="task-input" placeholder="Enter your task" 
            onChange={handleTaskChange}/>

            <div className="task-form-bottom-line">
                <div>
                    <select className="task-status" onChange={handleStatusChange}>
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