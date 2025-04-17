import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TaskFilterBar from "../components/TaskFilterBar";
import TaskItem from "../components/TaskItem";
import API from "../services/axios";

type Task = {
  _id: string;
  title: string;
  dueDate: string;
  priority: "high" | "medium" | "low";
  isCompleted: boolean;
};

export default function TaskListPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!newTask) return;
    await API.post("/tasks", {
      title: newTask,
      dueDate: new Date().toISOString().slice(0, 10),
      priority: "medium",
    });
    setNewTask("");
    fetchTasks();
  };

  const toggleComplete = async (id: string, done: boolean) => {
    await API.put(`/tasks/${id}`, { isCompleted: !done });
    fetchTasks();
  };

  const deleteTask = async (id: string) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">TODOリスト</h1>
        <TaskFilterBar
          value={newTask}
          onChange={setNewTask}
          onAdd={addTask}
        />
        <div className="mt-6 space-y-3">
          {tasks.map((task) => (
            <TaskItem
              key={task._id}
              id={task._id}
              title={task.title}
              dueDate={task.dueDate}
              priority={task.priority}
              completed={task.isCompleted}
              onToggle={toggleComplete}
              onDelete={deleteTask}
            />
          ))}
        </div>
      </main>
    </div>
  );
}