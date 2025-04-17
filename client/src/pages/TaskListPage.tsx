import Sidebar from "../components/Sidebar";
import TaskFilterBar from "../components/TaskFilterBar";
import TaskItem from "../components/TaskItem";

export default function TaskListPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">TODOリスト</h1>
        <TaskFilterBar />
        <div className="mt-6 space-y-3">
          <TaskItem
            title="レポートを作成"
            dueDate="2024年4月25日"
            priority="high"
            completed={false}
          />
          <TaskItem
            title="ミーティングの準備"
            dueDate="2024年4月27日"
            priority="medium"
            completed={false}
          />
          <TaskItem
            title="買い物に行く"
            dueDate="2024年4月30日"
            priority="low"
            completed={true}
          />
          <TaskItem
            title="プレゼンテーションの資料の見直し"
            dueDate="2024年4月20日"
            priority="high"
            completed={true}
          />
        </div>
      </main>
    </div>
  );
}