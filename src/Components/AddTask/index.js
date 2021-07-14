import React, { useState } from 'react';
import { Input, Button } from 'antd';
import "./AddTask.css";
let taskKey="0";
function AddTask(props) {
    const [newTask, setNewTask] = useState('');
    const { tasks, setTasks } = props;
    const setTaskValue = () => {
        const currentTasks = [...tasks];
        const setNewTaskObject = {
            title: newTask,
            createdAt: new Date(),
            isDone: false,
            key: taskKey,
            isEdit: false,
            subTasks: [],
        }
        currentTasks.push(setNewTaskObject);
        setTasks(currentTasks);
        setNewTask('');
        taskKey=taskKey+1;
    }
    return (
        <div className="addTaskContainer">
            <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <Button onClick={() => setTaskValue()} disabled={!newTask}>Add Task</Button>
        </div>
    );
}

export default AddTask;