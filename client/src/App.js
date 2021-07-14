import Form from './components/Form';
import List from './components/List';
import { useState } from 'react'

const data=[
{
  _id:1,
  text:'algo',
  done:false},
  {
    _id:2,
    text:'algo',
    done:false}
  ,{
    _id:3,
    text:'algo',
    done:false}

];


const App = () => {
  const [tasks, setTasks] = useState(data);
  // render
  const addTask = task =>{
    setTasks([...tasks,task]);
  };
  return (
    <div className="container">
      <h1>Lista de tareas</h1>
      <Form addTask={addTask}/>
      <List tasks={tasks} />
    </div>
  );
};

export default App;
