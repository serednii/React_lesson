const NewTodoForm = ({ valueTodo, valueCategory, updateTextTodo, updateTextCategory, handleActionTodo, handleActionCategory }) => {
  return (<>
    <label>
      <input
        placeholer='new category'
        value={valueCategory}
        onChange={(e) => updateTextCategory(e.target.value)}
        />
      <button onClick={handleActionCategory}>Add category</button>
    </label>
    <br/>
     <label>
     <input
       placeholer='new todo'
       value={valueTodo}
       onChange={(e) => updateTextTodo(e.target.value)}
       />
     <button onClick={handleActionTodo}>Add todo</button>
   </label>
       </>
  );
};

export default NewTodoForm;
