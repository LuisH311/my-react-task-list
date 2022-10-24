 import {GrAdd} from 'react-icons/gr'
function TaskList (){
    return <>
    <div className="Container1">
    <input type="text" className='text' placeholder="Add your new todo"/>
    <button id='add'>
     <GrAdd/>
    </button>
 
    </div>
    </> 
}

export default TaskList;