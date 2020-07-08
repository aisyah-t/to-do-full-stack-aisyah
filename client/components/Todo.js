import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, text }) => (
    <div className = 'ul'>
        <ul>
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
            >
            {text}
        </ul>
        </div>
)
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo