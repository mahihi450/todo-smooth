export default function TaskFilterBar() {
  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="🔍 検索"
        className="border rounded px-3 py-1 w-60"
      />
      <select className="border rounded px-2 py-1">
        <option>フィルター</option>
        <option>完了</option>
        <option>未完了</option>
      </select>
      <select className="border rounded px-2 py-1">
        <option>並び替え</option>
        <option>期限順</option>
        <option>優先度順</option>
      </select>
      <button className="ml-auto bg-blue-600 text-white px-4 py-1 rounded">
        追加
      </button>
    </div>
  );
}