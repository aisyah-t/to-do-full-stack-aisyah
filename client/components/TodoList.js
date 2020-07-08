import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

// This component calls upon another component (Todo) and maps through to display each todo created.
// onClick in this functional component changes things in the todolist to be 'active' / 'completed' 

const TodoList = ({ todos }) => (
    <ul>
        {todos.map(todo =>
            <Todo 
            key={todo.id}
            {...todo}
            onClick={() => toggleTodo(todo.id)}
            />
        )}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    //toggletodo goes here as required func
}

export default TodoList