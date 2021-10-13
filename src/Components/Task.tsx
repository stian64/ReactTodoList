import React, { useState } from "react";
import TodoItem from '../Models/ToDoItem';

function Task({ task , index, completeTask, removeTask }: { task: TodoItem, index: number, completeTask: any, removeTask : any}) {
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.title}
            <button style={{ background: "red"}} onClick={ () =>  removeTask(index)}>x </button>
            <button onClick={() =>  completeTask(index)}>Complete</button>
        </div>
    );
}

export default Task;