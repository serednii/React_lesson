import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import InputField from './components/InputField';
import { addNewTodo, fetchTodos } from './store/todoSlice';
import {addCategory} from './store/categoriesSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/todos/TodoList';

import './App.css';
import CategoryList from './components/category/CategoryLIst';


function App() {

const [textTodo, setTextTodo] = useState('');
const [textCategory, setTextCategory] = useState('');
const {status, error} = useSelector(state => state.todos)

const dispatch = useDispatch()

const handleActionTodo = () =>{
  if(textTodo.trim().length){
    dispatch(addNewTodo(textTodo))
    setTextTodo('')
  }
}

const handleActionCategory = () =>{
  if(textCategory.trim().length){
    dispatch(addCategory({textCategory}))
    setTextCategory('')
  }
}

useEffect(()=>{
  dispatch(fetchTodos());
},[dispatch]);

  return (
    <div className='App'>
     <NewTodoForm 
     valueTodo={textTodo} 
     updateTextTodo={setTextTodo} 
     valueCategory={textCategory} 
     updateTextCategory={setTextCategory} 
     handleActionCategory={handleActionCategory}
     handleActionTodo={handleActionTodo}
     />
    {/* <CategoryList /> */}
    {status ==='loading' && <h2>Loading...</h2>}
    {error && <h2>An error occurred: {error}</h2>}
    <TodoList />
    </div>
  );

}

export default App;
