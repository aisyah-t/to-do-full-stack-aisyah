import React from 'react'


class Edit extends React.Component {
    state = {
        to_do: '',
        priority: '',
        completed: '',
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    

    render() {
        return (
            <>
                 <form className="editForm" onSubmit="">
                    <label>To Do:
                        <input type="text" name="to_do" onChange={this.handleChange}></input>
                    </label>
                    <label>Priority:
                        <input type="text" name="priority" onChange={this.handleChange}></input>
                    </label>
                    <label>Completed:
                        <input type="checkbox" name="completed" onChange={this.handleChange}></input>
                    </label>
                    <input type="submit"></input>
                </form>
            </>
        )
    }
}



export default Edit