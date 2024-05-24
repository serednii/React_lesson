import { useSelector } from "react-redux/es/exports";
import './CategoryStyle.css';
import TodoItem from '../todos/TodoItem';

import CategoryItem from "./CategoryItem";
const CategoryList = () =>{
    const categories = useSelector(state => state.category.category)
    const todos = useSelector(state => state.todos.todos);
    console.log(categories)
    return(
        <>
        <ul className="category">
            <h1>Category</h1>
    {categories.map((category) => (
        <CategoryItem
          key={category.id}
          {...category}
        />
      ))}
        </ul>
        </>
    )
}

export default CategoryList