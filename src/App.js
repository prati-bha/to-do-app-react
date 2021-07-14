import { Card } from 'antd';
import { useState } from 'react';
import AdminInput from './Components/AdminInput';
import FilterItem from './Components/FilterItem';
import AddTask from './Components/AddTask';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isAdmin, setAdmin] = useState(true);
  return (
    <div className="App">
      <AdminInput 
        isAdmin={isAdmin}
        setAdmin={setAdmin}
      />
      <Card title="To-Do-App" type="inner">
        <FilterItem
          tasks={tasks}
          setTasks={setTasks}
          isAdmin={isAdmin}
        />
        {isAdmin && <AddTask
          tasks={tasks}
          setTasks={setTasks}
          isSubTask={false}
          isAdmin={isAdmin}
        />}
      </Card>
    </div>
  );
}

export default App;
