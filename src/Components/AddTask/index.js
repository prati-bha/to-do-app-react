import React, { useState } from 'react';
import { Input, Button } from 'antd';
import "./AddTask.css";
let taskKey=0;
function AddTask(props) {
    const [newTask, setNewTask] = useState('');
    const { tasks, setTasks, isSubTask, parentKey } = props;
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
        if(isSubTask) {
            const taskIndex = tasks.findIndex((elem) => elem.key === parentKey);
            if(currentTasks[taskIndex].subTasks.length === 0) {
                setNewTaskObject.key = 1
            }else {
                const subTaskKey = currentTasks[taskIndex].subTasks[currentTasks[taskIndex].subTasks.length-1].key+1;
                setNewTaskObject.key = subTaskKey;
            }
            const newSubTask = [...currentTasks[taskIndex].subTasks];
            newSubTask.push(setNewTaskObject);
            currentTasks[taskIndex].subTasks = [...newSubTask];
        }else {
            currentTasks.push(setNewTaskObject);
            taskKey=taskKey+1;
        }
        setTasks(currentTasks);
        setNewTask('');
    }
    return (
        <div className="addTaskContainer">
            <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <Button onClick={() => setTaskValue()} disabled={!newTask}>Add {isSubTask ? 'Sub Task' : 'Task'}</Button>
        </div>
    );
}

export default AddTask;