// src/pages/TaskListPage.tsx
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TaskFilterBar from "../components/TaskFilterBar";
import TaskItem from "../components/TaskItem";
import API from "../services/axios"; // axiosインスタンス

type Task = {
  id: string;
  title: string;
  dueDate: string;
  priority: "high" | "medium" | "low";
  isCompleted: boolean;
};

export default function TaskListPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  useEffect(() => {
    API.get("/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error("タスク取得エラー", err));
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">TODOリスト</h1>
        <TaskFilterBar />
        <div className="mt-4 space-y-2">
          {tasks.map((t) => (
            <TaskItem
              key={t.id}
              title={t.title}
              dueDate={t.dueDate}
              priority={t.priority}
              completed={t.isCompleted}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
