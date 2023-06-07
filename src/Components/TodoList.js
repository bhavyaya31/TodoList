import React from 'react'

function TodoList(props) {
  return (
    <div className='todo-btn'>
    <li className='list-item my-3'>{props.item}
   <span className='icons'>
   <i className="fa fa-edit "  
   onClick={() => {
    props.editItem(props.index)}}>

   </i>
   <i className="fa-solid fa-trash-can icon-delete" 
   onClick = {e=>{
     props.deleteItem(props.index)
    }} >
  </i>

   
    </span> 
    </li>
    </div>
  )
}

export default TodoList
