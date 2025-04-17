import Sidebar from "../components/Sidebar";
import TaskFilterBar from "../components/TaskFilterBar";
import TaskItem from "../components/TaskItem";

export default function TaskListPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">TODOリスト</h1>
        <TaskFilterBar />
        <div className="mt-4 space-y-2">
          <TaskItem
            title="レポートを作成"
            dueDate="2024-04-25"
            priority="high"
            completed={false}
          />
          <TaskItem
            title="ミーティングの準備"
            dueDate="2024-04-27"
            priority="medium"
            completed={false}
          />
          <TaskItem
            title="買い物に行く"
            dueDate="2024-04-30"
            priority="low"
            completed={true}
          />
        </div>
      </main>
    </div>
  );
}