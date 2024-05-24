import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 
// export const fetchTodos = createAsyncThunk(
//     'todos/fetchTodos',
//     async function () {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
//         const data = await response.json();
//         return data;
//     }
// );

const categorySlice = createSlice({

    name: 'category',
    initialState: {
        category: [],
    },

    reducers: {

        addCategory(state, action) {
            state.category.push({
                id: new Date().toISOString(),
                category: action.payload.textCategory,
                completed: false,
            });
        },

        // toggleComplete(state, action) {
        //     const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
        //     toggledTodo.completed = !toggledTodo.completed;
        // },

        // removeTodo(state, action) {
        //     state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        // }

    },

    // extraReducers: {
    //     [fetchTodos.pending]: (state, action) => {
    //         state.status = 'loading';
    //         state.error = null;
    //     },

    //     [fetchTodos.fulfilled]: (state, action) => {
    //         state.status = 'resolved';
    //         state.todos = action.payload;
    //     },

    //     [fetchTodos.rejected]: (state, action) => { },

    // },

});

export const { addCategory } = categorySlice.actions;

export default categorySlice.reducer;