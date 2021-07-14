import {useState} from 'react';
const Form = (props) => {
  const[text, setText] =useState('');
  //props
const { addTask }=props;
//handlers
const handleSubmit = e =>{
  e.preventDefault();
  console.log('Enviaste el formulario');
  let newTask={
    _id: Math.round (Math.random()*1000),
    text: text,
    done:false
  };
  console.log(newTask);
addTask(newTask);
  setText('');
};
const handleChange = e =>{
  setText(e.target.value);
}
//render
    return(
        <form onSubmit={handleSubmit}>
            <input
            onChange={handleChange}
            type="text"
            value={text} />
            <input type="submit" value="Guardar"></input>
        </form>
    );
};

export default Form;
