import React from 'react';

const Todo=({todo,handleChange})=>{
    console.log(todo)
    return(
        <div>
            <input type="checkbox" style={{margin:"0 10px"}} checked={todo.done} onChange={()=>{handleChange(todo.id)}}/>
            <span>{todo.title}</span>
            {/*<span style={{position:"fixed",right:20,padding:"0 10px", cursor:"pointer",fontWeight:600}}>X</span>*/}
            <hr/>
        </div>
    )
}

export default Todo