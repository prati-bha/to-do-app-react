/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Input } from 'antd';

function EditItem(props) {
    const [editItemTitle, setEditItemTitle] = useState([]);
    const { tasks, setTasks, taskKey } = props;
    const taskIndex = tasks.findIndex((elem) => elem.key === taskKey);
    useEffect(() => {
        const currentTask = [...tasks]; 
        currentTask[taskIndex].title = editItemTitle;
        setTasks(currentTask)
    },[editItemTitle])
    return (
        <div>
            <Input value={editItemTitle} onChange={e => setEditItemTitle(e.target.value)} />
        </div>
    );
}

export default EditItem;