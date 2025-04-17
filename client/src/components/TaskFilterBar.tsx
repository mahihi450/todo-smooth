interface Props {
  value: string;
  onChange: (v: string) => void;
  onAdd: () => void;
}

export default function TaskFilterBar({ value, onChange, onAdd }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <input
        type="text"
        placeholder="検索"
        className="flex-1 min-w-[200px] px-3 py-2 border border-blue-200 rounded bg-blue-50"
      />
      <input
        type="text"
        placeholder="🔍 新しいタスクを追加..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 min-w-[200px] px-3 py-2 border border-gray-300 rounded bg-white"
      />
      
      <select className="px-3 py-2 border border-gray-300 rounded bg-white">
        <option>フィルター</option>
        <option>完了</option>
        <option>未完了</option>
      </select>
      <select className="px-3 py-2 border border-gray-300 rounded shadow">
        <option>並び替え</option>
        <option>期限順</option>
        <option>優先度順</option>
      </select>
      <button onClick={onAdd}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        追加
      </button>
    </div>
  );
}