import React, { useState, useEffect } from "react";
import CreateTask from './CreateTask';
import Task from './Task';
import TodoItem from '../Models/ToDoItem';
import './Todo.css';

function Todo() {
    
    const [tasks, setTasks] = useState<TodoItem[]>([
        {
            title: "Grab some Pizzas",
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

    const [tasksRemaining, SetTasksRemaining] = useState(0);

    useEffect(() => { 
        SetTasksRemaining(tasks.filter(task => !task.completed).length) 
    });

    const addTask = (title: string) => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    const completeTask = (index: number) => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const removeTask = (index: number) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <div className="header">Pending tasks ({ tasksRemaining })</div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                        task={task}
                        index={index}
                        removeTask={removeTask}
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