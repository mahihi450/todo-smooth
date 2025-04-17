export default function Sidebar() {
  return (
    <aside className="w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white p-6 shadow-lg hidden md:block rounded-r-2xl">
      <h2 className="text-2xl font-bold">TODO</h2>
      <ul className="space-y-2 text-lg">
        <li className="hover:text-blue-400 cursor-pointer">すべてのタスク</li>
        <li className="hover:text-blue-400 cursor-pointer">アーカイブ</li>
        <li className="hover:text-blue-400 cursor-pointer">カテゴリ追加</li>
        <li className="text-blue-400">＋ 仕事</li>
      </ul>
    </aside>
  );
}