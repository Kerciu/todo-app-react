import React from 'react'
import TaskForm from './assets/components/TaskForm'
import TaskColumn from './assets/components/TaskColumn'

import './App.css'

const App = () => {

  return (
    <div className='app'>
      <TaskForm />
      <main className='app-main'>
        <TaskColumn />
        <section className='task-column'>Section 2</section>
        <section className='task-column'>Section 3</section>
      </main>
    </div>
  )
}

export default App
