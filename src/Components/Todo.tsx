import React, { useState } from "react";
import CreateTask from './CreateTask';
import './Todo.css';

export interface TodoItem {
    completed: boolean;
    title: string;
}

function Task({ task , index, completeTask}: { task: TodoItem, index: number, completeTask: any}) {
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.title}
            <button onClick={() =>  completeTask(index)}>Complete</button>
        </div>
    );
}


function Todo() {
    
    const [tasks, setTasks] = useState<TodoItem[]>([
        {
            title: "Grab some Pizza",
            completed: true
        },
        {
            title: "Do your workout",
            completed: true
        },
        {
            title: "Hangout with friends",
            completed: false
        }
    ]);

    const addTask = (title: string) => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    const completeTask = (index: number) => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <div className="header">TODO - ITEMS</div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                        task={task}
                        index={index}
                        completeTask={completeTask}
                        key={index}
                    />
                ))}
            </div>
            <div className="create-task">
            <CreateTask addTask={addTask} />
            </div>
        </div>
    );
}

export default Todo;