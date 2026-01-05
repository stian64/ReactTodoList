import React from "react";
import TodoItem from '../Models/ToDoItem';

interface TaskProps {
    task: TodoItem;
    index: number;
    completeTask: (index: number) => void;
    removeTask: (index: number) => void;
}

function Task({ task , index, completeTask, removeTask }: TaskProps) {
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.title}
            <button style={{ background: "red"}} onClick={ () =>  removeTask(index)}>X </button>
            <button onClick={() =>  completeTask(index)}>Complete</button>
        </div>
    );
}

export default Task;
