import React, {useState} from 'react'
import TaskForm from './assets/components/TaskForm'
import TaskColumn from './assets/components/TaskColumn'

import doingIcon from './assets/images/direct-hit.png';
import todoIcon from './assets/images/to-do-list.png';
import doneIcon from './assets/images/done-tick.png';

import './App.css'

const App = () => {

  const [tasks, setTasks] = useState([]);

  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
      <main className='app-main'>
        <TaskColumn title="To Do" icon={todoIcon}/>
        <TaskColumn title="Doing" icon={doingIcon}/>
        <TaskColumn title="Done" icon={doneIcon}/>
      </main>
    </div>
  )
}

export default App
