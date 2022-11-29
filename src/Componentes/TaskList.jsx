import { GrAdd } from "react-icons/gr";
import { useState } from "react";

function TaskList({ createNewTask }) {
  const [tarea, setTarea] = useState("");
  return (
    <>
      <div className="Container1">
        <form
          onSubmit={(e) => {
            createNewTask(tarea);
            setTarea("");
          }}
        >
          <input
            type="text"
            className="text"
            placeholder="Add your new todo"
            onChange={(e) => setTarea(e.target.value)}
          />
          <button id="add">
            <GrAdd />
          </button>
        </form>
      </div>
    </>
  );
}

export default TaskList;
