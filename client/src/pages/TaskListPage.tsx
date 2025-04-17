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
    <div className="flex min-h-screen bg-slate-100 text-gray-900   backgroundColor: #81c784">
    <Sidebar />
    <main className="flex-1 p-8 bg-white rounded-l-2xl shadow-md m-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">🎯 あなたのTODOリスト</h1>
      <TaskFilterBar 
       value={newTask}
       onChange={setNewTask}
       onAdd={addTask}/>
      <div className="mt-6 space-y-4">
        <TaskItem
          id="1"
          title="レポートを作成"
          dueDate="2024-04-25"
          priority="high"
          completed={false}
          onToggle={() => {}}
          onDelete={() => {}}
        />
        <TaskItem
          id="2"
          title="会議の準備"
          dueDate="2024-04-28"
          priority="medium"
          completed={true}
          onToggle={() => {}}
          onDelete={() => {}}
        />
        <TaskItem
          id="3"
          title="散歩"
          dueDate="2024-05-01"
          priority="low"
          completed={false}
          onToggle={() => {}}
          onDelete={() => {}}
        />
      </div>
    </main>
  </div>
  );
}