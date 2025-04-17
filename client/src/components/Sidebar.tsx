export default function Sidebar() {
  return (
    <aside className="w-64 bg-black text-white p-6 space-y-4">
      <h2 className="text-xl font-bold">TODO</h2>
      <ul className="space-y-2">
        <li>すべてのタスク</li>
        <li>アーカイブ</li>
        <li>カテゴリ追加</li>
        <li className="text-blue-400">＋ 仕事</li>
      </ul>
    </aside>
  );
}