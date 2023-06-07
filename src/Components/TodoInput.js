import React, { useState } from 'react'

function TodoInput(props) {
    const [inputText, setinputText] = useState('');
  return (
    <div className='input-container'>
        <input type="text" className='input-box-todo' placeholder='Enter Your List' value={inputText} onChange={e=>{
            setinputText(e.target.value)
        }}/>
       
        <button className='add-btn'
        onClick={()=>{props.addList(inputText) 
        setinputText("")}}> + </button>
        
    </div>
  )
}

export default TodoInput
