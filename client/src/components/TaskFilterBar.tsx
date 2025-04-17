export default function TaskFilterBar() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <input
        type="text"
        placeholder="検索"
        className="flex-1 min-w-[200px] px-3 py-2 border border-gray-300 rounded"
      />
      <select className="px-3 py-2 border border-gray-300 rounded">
        <option>フィルター</option>
        <option>完了</option>
        <option>未完了</option>
      </select>
      <select className="px-3 py-2 border border-gray-300 rounded">
        <option>並び替え</option>
        <option>期限順</option>
        <option>優先度順</option>
      </select>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        追加
      </button>
    </div>
  );
}