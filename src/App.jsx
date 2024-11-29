import { useState, useEffect } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleTask = () => {
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      name: newTask.trim(),
    };
    setTasks([task, ...tasks]);
    setNewTask("");
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
              value={newTask}
              placeholder="Digite aqui sua task..."
              onChange={(ev) => setNewTask(ev.target.value)}
            />
            <button onClick={handleTask}>
              <IoIosAddCircleOutline fontSize={50} className="icon" />
            </button>
          </div>
          <div className="allTasks">
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <div className="task" key={task.id}>
                  <h2>{task.name}</h2>
                  <div
                    className="options"
                    style={{ display: "flex", gap: "1rem" }}
                  >
                    <button onClick={() => removeTask(task.id)}>
                      <MdDeleteOutline fontSize={25} color="white" />
                    </button>
                    <input
                      type="checkbox"
                      name=""
                      id="checkTask"
                      className="checkTask"
                    />
                  </div>
                </div>
              ))
            ) : (
              <p>Nenhuma tarefa adicionada.</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
