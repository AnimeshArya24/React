import React, { useState } from 'react'
import useList from './custom/useList'
import './App.css';


export default function App() {
  const {list,push,pull}= useList()
  const [todo, setTodo] = useState("")
  const onsubmit = (event)=>{
    event.preventDefault()
    push(todo)
    setTodo("")
  }
  return (
    <div>
      <div class="cls">
       <div className="col-sm-5 mb-3 mb-sm-0">
      <div className="card">
      <div style={{textAlign:"center"}} className="card-body">
      <form onSubmit={(event)=>{onsubmit(event)}} class="mod">
        <label class = "aad"><h1 style={{paddingBottom:"60px"}}><b>Add TODO item</b></h1></label><br/>
        <input style={{
        color: "#292b2c",
        backgroundColor: "#fff",
      }}type="text" onChange={(e)=>{setTodo(e.target.value)}} value={todo}></input><br/><br/>
        <button type="submit" className="btn btn-primary" >Add todo</button>
      </form>
      </div>
      </div>
      </div>
      </div>
      <h5>
        {list.map((listItem,listIndex)=>{
          return(
            <div className="col-sm-2 mb-3 mb-sm-0">
    <div className="card1 border-dark mb-3">
      <div style={{backgroundColor:"beige",marginLeft:"50px"}} className="card1-body">
      <span class="add" key={listIndex}>{listItem}</span>
        <button style={{marginLeft:"30px"}} type="button" className="btn btn-outline-danger" onClick={()=>{pull(listIndex)}}>remove</button>
      </div>
    </div>
  </div>
          )
        })}
      
      </h5>
      </div>
  )
}
