let nextTodoId = 0 

//Defining how to add a new todo, with relevant ID to send to reducer

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

