import React from 'react';
import { Tabs } from 'antd';
import ListTask from '../ListTask';

const { TabPane } = Tabs;
function index(props) {
    const { tasks, setTasks } = props;
    return (
        <div>
            <Tabs defaultActiveKey="All" centered>
                <TabPane tab="All" key="All">
                    <ListTask
                        tasks={tasks}
                        source={tasks}
                        setTasks={setTasks} 
                    />
                </TabPane>
                <TabPane tab="Active" key="Active">
                    <ListTask
                        tasks={tasks}
                        source={tasks.filter((item) => !item.isDone)}
                        setTasks={setTasks}
                    />
                </TabPane>
                <TabPane tab="Completed" key="Completed">
                    <ListTask
                        tasks={tasks}
                        source={tasks.filter((item) => item.isDone)}
                        setTasks={setTasks}
                    />
                </TabPane>
            </Tabs>
        </div>
    );
}

export default index;