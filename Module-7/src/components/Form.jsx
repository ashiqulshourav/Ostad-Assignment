import { useState } from "react";
import AddList from "./AddList";

export default function Form (){
    const [taskName, setTaskName] = useState('');
    const [taskList, setTaskList] = useState([]);


    // Pass the name of the task
    const handleInputChange = (e) =>{
        setTaskName(e.target.value);
    }

    // set task to the array
    const handleEvent = () =>{
        if(taskName.trim() !== ""){
            setTaskList([...taskList, taskName]);
            setTaskName("");
        }
    }

    // remove the individual task from array & update 
    const handleRemoveTask = (index) =>{
        const updatedList = [...taskList];
        updatedList.splice(index, 1);
        setTaskList(updatedList);
    }

    // add item also when press enter 
    const handleKeyPress = (e) =>{
        if(e.key === "Enter"){
            handleEvent();
        }
    }
    
    return (
        <>
            <h2 className="text-center text-4xl font-semibold">To Do List App</h2>
            <div className="form">
                <div className="form-inner">
                    <div className="from-control py-4">
                        <label htmlFor="taskName">Task Name</label>
                        <input type="text" name="name" id="taskName"  className="block w-[100%] p-1 border rounded outline-none focus:border-black" value={taskName} onChange={handleInputChange} onKeyDown={handleKeyPress}/>
                    </div>
                    <div className="form-control flex justify-end">
                        <input type="submit" value="Add Task" className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-bold py-2 px-4 rounded transition w-[300px]" onClick={handleEvent}/>
                    </div>
                </div>
            </div>
            <AddList taskList={taskList} onRemove={handleRemoveTask}/>
        </>
    )
}