

import Task from './Task';

const List = props => {

 const { tasks } = props;

  return (
    <div className="list">
{tasks.map(task=> (
  <Task key={task._id} task={task}/>
))}
    </div>
  );
};

export default List;
