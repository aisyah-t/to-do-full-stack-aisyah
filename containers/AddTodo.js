import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

// The base dispatch function always synchronously sends an action to the store's reducer
// along with the previous state returned by the store, to calculate a new state. 

const AddTodo = ({ dispatch }) => {
  let input // the input variable which will hold reference to the input element

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

 // assign the node reference to the input variable(above where input = node)

export default connect()(AddTodo)
