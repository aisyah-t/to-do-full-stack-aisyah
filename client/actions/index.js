export const listToDos = (tasks) => {
  return {
    type: 'GET_TODOS',
    tasks: tasks
  }
}