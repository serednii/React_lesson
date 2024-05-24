import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const url = 'https://635d74d2ea764497f0dd237e.mockapi.io/cart';

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch(`${url}?_limit=20`);
            if (!response.ok) {
                throw new Error('Server Error!')
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error)
            return rejectWithValue(error.message)
        }
    }
);

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async function (id, { rejectWithValue, dispatch }) {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'DELETE',
            })
            console.log(response)
            if (!response.ok) {
                throw new Error('Can\'t delete task. Server error.')
            }
            dispatch(removeTodo({ id }))

        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
);

export const toggleStatus = createAsyncThunk(
    'todos/toggleStatus',
    async function (id, { rejectWithValue, dispatch, getState }) {
        const todo = getState().todos.todos.find(todo => todo.id === id)
        console.log(id)
        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    completed: !todo.completed,
                })
            });
            if (!response.ok) {
                throw new Error('Can\'t toggle status. Server error.')
            }

            dispatch(toggleComplete({ id }));

            const data = await response.json();
            console.log(data)

        } catch (error) {
            return rejectWithValue(error.message)
        }


    }
)

export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo',
    async function (text, { rejectWithValue, dispatch }) {
        try {
            const todo = {
                title: text,
                userId: 1,
                completed: false,
            };
            const response = await fetch(`${url}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(todo)
            });

            if (!response.ok) {
                throw new Error('Cant\'t add task. Server error.');
            }

            const data = await response.json();
            console.log(data)
            dispatch(addTodo(data))
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)


const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

const todoSlice = createSlice({

    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },

    reducers: {

        addTodo(state, action) {
            console.log(state)
            console.log(action)

            // state.todos.push({
            //     id: new Date().toISOString(),
            //     text: action.payload.textTodo,
            //     completed: false,
            // });
            state.todos.push(action.payload)
        },

        toggleComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },

        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        }

    },

    extraReducers: {
        [fetchTodos.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },

        [fetchTodos.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.todos = action.payload;
        },

        [fetchTodos.rejected]: setError,
        [deleteTodo.rejected]: setError,
        [toggleStatus.rejected]: setError,


    },

});

const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;