import React from "react"
const ListMapper = (props) => {
    let filterd = props.list
    .filter((element)=>element.day===props.weekDay)
    return filterd.map(e => 
    <li> 
     {e.task} 
     {e.time} 
     {e.day} 
     <button id={e.id} onClick={props.handleDelete} 
     >Done</button>   
    </li>)
}
export default ListMapper

