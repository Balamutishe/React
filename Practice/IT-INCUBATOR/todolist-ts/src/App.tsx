import './App.css'
import {TodoList} from "./TodoList/TodoList.tsx";

function App() {
    const tasks = [
        {id: 1, title: 'Task 1', done: false},
        {id: 2, title: 'Task 2', done: false},
        {id: 3, title: 'Task 3', done: true},
    ]

    const tasks2 = [
        {id: 1, title: 'Terminator', done: false},
        {id: 2, title: 'Dune', done: true},
        {id: 3, title: 'Avengers', done: true},
    ]


  return (
    <div className='app'>
        <TodoList title={'What to learn'} tasks={tasks}/>
        <TodoList title={'Movies'} tasks={tasks2}/>
    </div>
  )
}

export default App
