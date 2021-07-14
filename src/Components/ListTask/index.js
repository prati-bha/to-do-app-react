import React from 'react';
import { List, Checkbox, Button } from 'antd';
import { EditOutlined, RightOutlined, DeleteOutlined } from '@ant-design/icons';
import EditItem from '../EditItem';

function ListTask(props) {
    const { tasks, source, setTasks } = props;
    const changeTaskStatus = (e, key) => {
        const taskIndex = tasks.findIndex((elem) => elem.key === key);
        const currentTasks = [...tasks];
        currentTasks[taskIndex].isDone = e.target.checked;
        setTasks(currentTasks)
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
    return (
        <div>
            <List
                dataSource={source}
                renderItem={(item) => {
                    return (<>
                        <List.Item>
                            <Checkbox checked={item.isDone} onChange={(e) => changeTaskStatus(e, item.key)} />
                            {item.isEdit ? <EditItem taskKey={item.key} tasks={tasks} setTasks={setTasks} /> : item.title}
                            {item.isEdit ?
                                <Button type="link" onClick={() => changeEditStatus(false, item.key)}><RightOutlined /></Button>
                                :
                                <Button type="link" onClick={() => changeEditStatus(true, item.key)}><EditOutlined /></Button>
                            }
                            <Button type="link" onClick={() => deleteTask(item.key)}><DeleteOutlined /></Button>
                            {/* <List
                                dataSource={item.subTasks}
                                renderItem={(subItem) => {
                                    <List.Item>
                                        {subItem.title}
                                    </List.Item>
                                }}
                            /> */}

                        </List.Item>
                    </>)
                }}
            />
        </div>
    );
}

export default ListTask;