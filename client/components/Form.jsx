import React from 'react'     
     

class Form extends React.Component {

render(){

    return(
     
     <form>
        <input type="text" name="task"/>
        <input type="submit" value="Add"/>
      </form>
    )
}

}

export default Form