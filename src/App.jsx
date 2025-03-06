import { useEffect } from "react";
import Tasks from "./components/task";
import AddTask from "./components/addTask";
import { useState } from "react";
import { v4 } from "uuid";

function App() {
  const [tasks, settasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  // useEffect(() => {
  //   async function fetchTasks() {
  //     const response = await fatch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
  //       method: 'GET'
  //     });

  //     const data = await response.json()  
      
  //     settasks(data);
  //   }
  //   fetchTasks();
  // }, [])
  

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    settasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    settasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
        id: v4(),
        title, 
        description,
        isCompleted: false, 
    };
    settasks([...tasks, newTask]);
}


  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4"> {/* Usando flex-col para empilhar os componentes */}
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/> {/* Adicionando AddTask acima */}
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
