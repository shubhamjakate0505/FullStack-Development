import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TODO(){
   let [TODON, setTODON] = useState([{task:"simple",id:uuidv4(),isDone:false}]);
    let [newtask,setnewtask]=useState([""]);
    let newtasktodo = ()=>
        {
            setTODON((PrevTodo)=>{
                return [...PrevTodo,{task:newtask,id:uuidv4(),isDone:false}];
            })
            setnewtask("")
        };
    let updatetaskvalue =(event)=>{
        // console.log(event.target.value)
        setnewtask(event.target.value)
      }
    let deleted=(id)=>{
        setTODON((prives)=>TODON.filter((priveTODO)=>priveTODO.id!=id))
    }
    let MarkAsDoneAll=()=>{
       setTODON((privTODO)=>(privTODO.map((todo)=>{
            return {
                ...todo,
                isDone:true
            }
        })))
    }
    let MarkASdone=(id)=>{
        setTODON((privTODO)=>(privTODO.map((todo)=>{
            if(todo.id==id){
                return {
                    ...todo,
                    isDone:true
                }
            }else{
                return todo
            }
            
        })))

    } 


    return (
        <div>
            <input type="text" placeholder="Enter The Task" value={newtask} onChange={updatetaskvalue}/>
            &nbsp;&nbsp;
            <button onClick={newtasktodo}> ADD Task</button><hr />
            <br/><br/>
            <h4>Task To Do</h4>
                <ul>
                {
                    TODON.map(todo => 
                    <li key={todo.id}>
                    <span style={todo.isDone ? {textDecoration:"line-through"}:{}}>{todo.task}</span>  
                    &nbsp; &nbsp;
                    <button onClick={()=>deleted(todo.id)}>DELETE</button>
                    <button onClick={()=>MarkASdone(todo.id)}>mark As Done</button>
                    </li>)}
                    
                </ul>
                    <br /><br />
        <button onClick={MarkAsDoneAll}>Mark As Done All</button>
</div>
       
    );
}

