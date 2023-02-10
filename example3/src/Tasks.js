export const Tasks2 = (props) =>{
    return (
        <div className='task'>
                  <p>{props.taskname}</p>
                  <button onClick={() => props.delete2(props.id)}>x</button>
        </div>
      );
};


export const Task3 = (props) => {
    
    return (
        <div  key= {props.key} className='task'>
                  <p>{props.taskThirdname}</p>
                  <button onClick={() => props.completedTask3(props.id)} style={{backgroundColor: props.completed ? "green" : "gray"}}>completed</button>
                  
                  <button onClick={() => props.delete3(props.id)}>x</button>
        </div>
        
      );
};