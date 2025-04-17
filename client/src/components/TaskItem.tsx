interface Props {
  id: string;
  title: string;
  dueDate: string;
  priority: "high" | "medium" | "low";
  completed: boolean;
  onToggle: (id: string, done: boolean) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({
  id, title, dueDate, priority, completed, onToggle, onDelete
}: Props){
  const priorityMap = {
    high: { label: "高", color: "bg-red-100 text-red-700" },
    medium: { label: "中", color: "bg-yellow-100 text-yellow-700" },
    low: { label: "低", color: "bg-green-100 text-green-700" },
  };

  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 rounded shadow-sm border border-gray-200">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
           checked={completed} onChange={() => onToggle(id, completed)} className="w-5 h-5 accent-blue-500"
        />
        <span className={`${completed ? "line-through text-gray-400" : "text-gray-800"} text-lg`}>
          {title}
        </span>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <span>{dueDate}</span>
        <span className={`text-white px-2 py-1 rounded ${priorityMap[priority].color}`}>
          {priorityMap[priority].label}
        </span>
        <button className="text-red-500 hover:text-red-700" onClick={() => onDelete(id)}>🗑</button>
      </div>
    </div>
  );
  
};