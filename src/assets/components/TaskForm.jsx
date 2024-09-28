import React from "react";

const TaskForm = () => {
    return <header className="app-header">
        <form>
            <input type="text" className="task-input" placeholder="Enter your tags"/>

            <div className="task-form-bottom-line"></div>
        </form>
    </header>
}

export default TaskForm;