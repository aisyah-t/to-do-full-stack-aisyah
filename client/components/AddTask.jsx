import React from 'react'
import {connect} from 'react-redux'
import {saveToDo} from '../actions'

class AddTask extends React.Component {

    state = {
        newTask: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
          })

    }

    handleSubmit = event => {
        event.preventDefault()
    
        this.props.dispatch(saveToDo({task: this.state.newTask }))
        
        this.setState({task: ''})
    
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='spaceOutForm'>
                <label>
                    Add Task:
                    <input type="text" name="newTask" onChange = {this.handleChange} />
                </label>
                <input type="submit" value="Add" />
            </form>


        )
    }
}



// function mapStateToProps(globalState) {
//     return {
//       loading: globalState.loading
//     }
//   }
  
  export default connect()(AddTask)
