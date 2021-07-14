import React from 'react';
import { List, Checkbox, Button } from 'antd';
import { EditOutlined, RightOutlined, DeleteOutlined } from '@ant-design/icons';
import EditItem from '../EditItem';
import AddTask from '../AddTask';
import './ListTasks.css';

function ListTask(props) {
    const { tasks, source, setTasks, isAdmin } = props;
    const changeTaskStatus = (e, key, isSubTask, subTaskKey) => {
        const taskIndex = tasks.findIndex((elem) => elem.key === key);
        const currentTasks = [...tasks];
        if (isSubTask) {
            const currentSubTasks = currentTasks[taskIndex].subTasks;
            const subTaskIndex = currentSubTasks.findIndex((elem) => elem.key === subTaskKey);
            currentSubTasks[subTaskIndex].isDone = e.target.checked;
            currentTasks[taskIndex].subTasks = [...currentSubTasks];
        } else {
            currentTasks[taskIndex].isDone = e.target.checked;
        }
        setTasks(currentTasks);
    }
    const changeEditStatus = (flag, key) => {
        const taskIndex = tasks.findIndex((elem) => elem.key === key);
        const currentTasks = [...tasks];
        currentTasks[taskIndex].isEdit = flag;
        setTasks(currentTasks)
    }
    const deleteTask = (key) => {
        const taskIndex = tasks.findIndex((elem) => elem.key === key);
        const currentTasks = [...tasks];
        currentTasks.splice(taskIndex, 1);
        setTasks(currentTasks)
    }
    const getSubtask = (subTasks, itemKey) => {
        return subTasks.map((subTask) => (
            <div key={subTask.title}>
                {isAdmin && <Checkbox checked={subTask.isDone} onChange={(e) => changeTaskStatus(e, itemKey, true, subTask.key)} />}
                {subTask.title}
            </div>
        ))
    }
    return (
        <div>
            <List
                dataSource={source}
                renderItem={(item) => {
                    return (<>
                        <List.Item>
                            <div>
                            {isAdmin && <Checkbox checked={item.isDone} onChange={(e) => changeTaskStatus(e, item.key)} />}
                            {item.isEdit ? <EditItem taskKey={item.key} tasks={tasks} setTasks={setTasks} /> : item.title}
                            {isAdmin && (item.isEdit ?
                                <Button type="link" onClick={() => changeEditStatus(false, item.key)}><RightOutlined /></Button>
                                :
                                <Button type="link" onClick={() => changeEditStatus(true, item.key)}><EditOutlined /></Button>)
                            }
                            {isAdmin && <Button type="link" onClick={() => deleteTask(item.key)}><DeleteOutlined /></Button>}
                            </div>
                            <div className="subTaskListContainer">
                                {item.subTasks.length > 0 && '-----------SubTasks-------------'}
                                {getSubtask(item.subTasks, item.key)}
                            </div>
                            <div className="subTaskContainer">
                                {isAdmin && <AddTask
                                    tasks={tasks}
                                    setTasks={setTasks}
                                    isSubTask={true}
                                    parentKey={item.key}
                                />}
                            </div>
                        </List.Item>
                    </>)
                }}
            />
        </div>
    );
}

export default ListTask;