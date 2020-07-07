import React from 'react'


class AddTask extends React.Component {


    render() {
        return (
            <form>
                <label>
                    Add Task:
                    <input type="text" name="task" />
                </label>
                <input type="submit" value="Submit" />
            </form>


        )
    }
}

export default AddTask