
import { useState } from 'react'
import TaskList from './TaskList'
import { useEffect } from 'react'


function Task() {
    const [taskItems, setTaskItems] = useState([])
    const [marcado, setMarcado] = useState(false);
    const [claseLabel, setClaseLabel] = useState("label");

    const handleDelete = () => {
        setTaskItems(taskItems.filter(task => !task.done))
    }

    const handleSubmit = (value) => {
        localStorage.setItem("titulo", JSON.stringify(value));
    }

    const deleteTask = () => {
        if (window.confirm('Quieres Eliminar esta Tarea?')) {
            handleDelete()

        }
    }
    
    const tareaHecha = (e) => {
        const arr = JSON.parse(localStorage.getItem('titulo'))
        arr.forEach((task)=>{
            if (task.name === e) {
                
                if (task.done === false) {
                    task.done = true
                    task.label = "label-underline"
                }else{
                    task.done = false
                    task.label = "label"
                }
            }
            
        })
        localStorage.setItem('titulo', JSON.stringify(arr))
        window.location.reload()
        /*  if (marcado) {
            setClaseLabel("label");
            setClaseLabel("label-underline");
          setMarcado(false);
        } else {
          
          setMarcado(true);
        } */
      };


    function createNewTask(taskName) {
        if (!taskItems.find(task => task.name === taskName)) {
            setTaskItems([
                ...taskItems,
                {
                    name: taskName,
                    done: false,
                    label: ""
                }
            ])
        }
    }

    const toggeletask = task => {
        setTaskItems(
            taskItems.map((t => (t.name == task.name) ? { ...t, done: !t.done } : t))
        );
    };


    useEffect(() => {
        let arr = JSON.parse(localStorage.getItem('titulo'));
        if (arr) {
            setTaskItems(arr);
        }
    }, [])
    useEffect(() => {

        handleSubmit(taskItems)
    }, [taskItems])



    return <div className='task'>
        <TaskList createNewTask={createNewTask} toggeletask={toggeletask} />

        <div>
            {taskItems.map((task, i) => (
                
                <div key={i}>
                    <label className={task.label}>
                    {task.name}
                    <input type="checkbox"  onClick={(e) => {
                        
                        /* toggeletask(task) */ 
                        tareaHecha(task.name)
                    } }
                        checked={task.done} 
                        readOnly
                        />
                        </label>
                </div>
            ))}
            <div>
                <button id="Clear" onClick={deleteTask}>Clear All</button>
            </div>
        </div>

    </div>
}


export default Task;