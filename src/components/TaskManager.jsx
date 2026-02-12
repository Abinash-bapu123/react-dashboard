import { useState } from "react";
function TaskManager() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleTask = () => {
        if (task.trim() === "") return;
        const newTask = {
            id: Date.now(),
            text: task,
        }
        setTasks([...tasks, newTask]);
        setTask("");
    }

    const handleRemoveTask = (id) => {
        const filteredTask = tasks.filter((item) => item.id !== id);
        setTasks(filteredTask);
    }

    return (
        <div>
            <h2>Task Manager</h2>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter task"></input>
            <button onClick={handleTask}>Add Task</button>
            <ul>
                {tasks.map((item) => (
                    <li key={item.id}>{item.text}<button onClick={() => handleRemoveTask(item.id)}>Delete</button></li>
                ))}
            </ul>

        </div>
    );
}

export default TaskManager;