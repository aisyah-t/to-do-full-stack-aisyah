
export const GET_TASKS = 'GET_TASKS'

export const getToDoList = () => {
    return {
      type: GET_TASKS
    }
  }

  export function fetchWombats(showLoading = true) {
    return dispatch => {
      // I'm about to get the wombats
      if (showLoading) dispatch(setLoading(true))
      getWombats()
        .then(wombats => {
          // I've got the wombats
          dispatch(setWombats(wombats))
          if (showLoading) dispatch(setLoading(false))
        })
        .catch(err => {
          if (showLoading) dispatch(setLoading(false))
        })
    }
  }


  // unsure what order to put these above 