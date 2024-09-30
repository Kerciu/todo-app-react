import React, {useState} from 'react'
import TaskForm from './assets/components/TaskForm'
import TaskColumn from './assets/components/TaskColumn'

import doingIcon from './assets/images/direct-hit.png';
import todoIcon from './assets/images/to-do-list.png';
import doneIcon from './assets/images/done-tick.png';

import './App.css'

const App = () => {

  const [tasks, setTasks] = useState([]);

  const handleDelete = (taskIdx) => {
    const newTasks = tasks.filter((task, idx) => idx !== taskIdx);
    setTasks(newTasks);
  }

  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
      <main className='app-main'>
        <TaskColumn title="To Do" handleDelete={handleDelete} icon={todoIcon} tasks={tasks} status="todo"/>
        <TaskColumn title="Doing" handleDelete={handleDelete} icon={doingIcon} tasks={tasks} status="doing"/>
        <TaskColumn title="Done" handleDelete={handleDelete} icon={doneIcon} tasks={tasks} status="done"/>
      </main>
    </div>
  )
}

export default App
