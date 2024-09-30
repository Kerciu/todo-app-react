import React, {useState} from "react";

import "./TaskForm.css";

const TaskForm = () => {

    const [taskData, setTaskData] = useState({
        task: "",
        status: "To do"
    });

    const handleChange = (e) => {

        const {name, value} = e.target;

        setTaskData(prev => {
            return {...prev, [name]: value};
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskData);
    }

    return <header className="app-header">
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" className="task-input" placeholder="Enter your task" 
            onChange={handleChange}/>

            <div className="task-form-bottom-line">
                <div>
                    <select className="task-status" name="status" onChange={handleChange}>
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