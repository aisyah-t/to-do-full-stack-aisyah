const initialState = [
  {
      "id": 2,
      "task": "Get milk",
      "details": "Get dark blue",
      "priority": "low",
      "completed": 0
  },
  {
      "id": 3,
      "task": "Get milk",
      "details": "Get dark blue",
      "priority": "low",
      "completed": 0
  },
  {
      "id": 4,
      "task": "Get milk",
      "details": "Get dark blue",
      "priority": "low",
      "completed": 0
  }
]

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_TODOS':
      return action.tasks
    default: 
      return state
  }
}

export default reducer