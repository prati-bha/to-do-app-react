import { Card } from 'antd';
import { useState } from 'react';
import AdminInput from './Components/AdminInput';
import FilterItem from './Components/FilterItem';
import AddTask from './Components/AddTask';
import './App.css';

function App() {
  const [ tasks, setTasks ] = useState([]);
  return (
    <div className="App">
      <AdminInput />
      <Card title="To-Do-App" type="inner">
        <FilterItem
          tasks={tasks}
          setTasks={setTasks}
        />
        <AddTask
          tasks={tasks}
          setTasks={setTasks} />
      </Card>
    </div>
  );
}

export default App;
