import React from "react";

const AddTaskForm = (props) => {

  return (
    <div>
          <form onSubmit={props.submit}>

           <label>
        Task title:
        <input type="text" name="title" required onChange={(event) => props.change(event)} />
    </label>
    <br />
    <label>
        Due date:
        <input type="date" name="deadline" required onChange={(event) => props.change(event)} />
    </label>
    <br />
 

    <label>
        Details:
        <input type="text" name="description" onChange={(event) => props.change(event)} />
    </label> 

    <label>
     Priority:
     <select type="text" name="priority" required onChange={(event) => props.change(event)} >
        <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
             </select>
    </label>

        <input type="submit" value="Submit" />
        </form>
    </div>
  )
};
//using "Select as a input for choosing different options in line 28, reference:https://react.dev/reference/react-dom/components/select "
export default AddTaskForm;
