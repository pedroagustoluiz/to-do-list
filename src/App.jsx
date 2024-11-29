import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTask = () => {
    if (newTask.trim()) {
      const task = {
        id: tasks.length + 1,
        name: newTask.trim(),
      };
      setTasks([task, ...tasks]);
      setNewTask(""); // Limpa o campo após adicionar
    }
  };

  const removeTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <>
      <header>
        <h1>Lista de tarefas</h1>
      </header>
      <main>
        <div className="addTask">
          <div className="newTask">
            <input
              type="text"
              name="task"
              id="task"
              placeholder="Digite aqui sua task..."
              value={newTask}
              onChange={(ev) => setNewTask(ev.target.value)}
            />
            <button onClick={handleTask}>
              <IoIosAddCircleOutline fontSize={50} className="icon" />
            </button>
          </div>
          <div className="allTasks">
            {tasks.map((task) => (
              <div className="task" key={task.id}>
                <h2>{task.name}</h2>
                <div
                  className="options"
                  style={{ display: "flex", gap: "1rem" }}
                >
                  <button onClick={() => removeTask(task.id)}>
                    <MdDeleteOutline fontSize={25} className="removeTask" />
                  </button>
                  <input
                    type="checkbox"
                    name=""
                    id={`checkTask-${task.id}`}
                    className="checkTask"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
