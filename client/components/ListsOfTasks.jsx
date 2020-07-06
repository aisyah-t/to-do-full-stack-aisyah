import React from "react"

function ListOfTasks(props){

return(
<ul> 
<li><button onClick={props.onClick}>{props.tasks.Tasks}</button></li>
</ul>
)
}


export default ListOfTasks