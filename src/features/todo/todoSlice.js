import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            console.log({todos: state.todos})
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter((todo) => todo.id !== id)
        }
    }
})

export const {addToDo, removeTodo} = todoSlice.actions
export default todoSlice.reducer
