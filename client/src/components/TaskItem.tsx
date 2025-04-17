interface TaskItemProps {
  title: string;
  dueDate: string;
  priority: "high" | "medium" | "low";
  completed: boolean;
}

export default function TaskItem({ title, dueDate, priority, completed }: TaskItemProps) {
  const priorityColor = {
    high: "bg-red-500",
    medium: "bg-yellow-400",
    low: "bg-green-500",
  };

  return (
    <div className="flex items-center justify-between bg-white p-3 rounded shadow-sm">
      <div className="flex items-center gap-2">
        <input type="checkbox" defaultChecked={completed} />
        <span className={completed ? "line-through text-gray-400" : ""}>{title}</span>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <span>{dueDate}</span>
        <span className={`px-2 py-1 text-white rounded ${priorityColor[priority]}`}>
          {priority === "high" ? "⭑" : priority === "medium" ? "●" : "✓"}
        </span>
        <button className="text-blue-600">編集</button>
        <button className="text-red-500">🗑</button>
      </div>
    </div>
  );
}