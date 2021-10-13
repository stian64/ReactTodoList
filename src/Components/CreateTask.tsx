import React, { useState } from "react";

function CreateTask({ addTask} : { addTask: any}) {
const [value, setValue] = useState("");

const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!value) return;

    addTask(value);
    setValue("");
}

return (
    <form onSubmit={handleSubmit}>
        <input
           type="text"
           className="input"
           value={value}
           placeholder="Add a new task"
           onChange ={e => setValue(e.target.value)}
           />
    </form>
);

}

export default CreateTask;