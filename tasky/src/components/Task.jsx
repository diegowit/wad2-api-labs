import React from 'react';

const Task = (props) => {
    
       return (
          <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p>{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.children}</p>
            <p className="description">{props.description}</p>
            <p
        className="priority"
        style={{
          backgroundColor:
            props.priority === "Low" //using "===" and not "=" becasuse we are comparing the String value and not assigning it
              ? "#2ecc71" 
              : props.priority === "Medium"
              ? "#f39c12" 
              : props.priority === "High"
              ? "#e74c3c" 
              : "#bdc3c7", //else if is non . use color grey
          
        }}
      >
        {props.priority}
      </p>
            
            
             <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>

        </div>
        
    )
}

    

export default Task;