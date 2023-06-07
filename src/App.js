import "./App.css"
import React, { useState} from 'react'
import TodoInput from "./Components/TodoInput"
import TodoList from "./Components/TodoList"
function App() {
  const [listTodo, setlistTodo] = useState([]);

  // const[toggleSubmit,settoggleSubmit] = useState(true);
  let addList=(inputText)=>{
    setlistTodo([...listTodo,inputText]);
  }
  const deletelistitem=(key)=>{
    let newListTodo=[...listTodo]
    newListTodo.splice(key,1)
    setlistTodo([...newListTodo])
  }
  const editListItem = (key) =>{
    let newEditItem = listTodo.find((Listitem)=>{
        return Listitem.key === key
    });
    console.log(newEditItem);

    
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
        <TodoInput addList={addList}/>
       <h1 className='app-heading my-5'>Todo's List:-</h1>
       <hr/>
       
       {listTodo.map((Listitem,i)=>{
          return(
            <TodoList key= {i} index={i} item={Listitem} deleteItem={deletelistitem} editItem={editListItem} />
            )
          })}
       
       
          
      </div>
         
    </div>
  )
}

export default App

