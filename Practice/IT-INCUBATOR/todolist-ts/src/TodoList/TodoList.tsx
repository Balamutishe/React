import {TPropsTodoList, TTask} from "./types.ts";
import './TodoList.css';

export function TodoList({title, tasks}: TPropsTodoList) {
    return (
        <div>
            <h3>
                {title}
            </h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul className='list'>
                {tasks.map((task: TTask) => (
                    <li key={task.id}>
                        <input type='checkbox' checked={task.done}/><span>{task.title}</span>
                    </li>
                ))}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}