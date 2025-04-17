import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // 仮のログイン処理
      if (email && password) {
        navigate("/tasks");
      } else {
        alert("メールアドレスとパスワードを入力してください");
      }
    } catch (err) {
      alert("ログイン失敗");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">ログイン</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="メールアドレス"
          className="w-full p-2 mb-3 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="パスワード"
          className="w-full p-2 mb-3 border rounded"
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          ログイン
        </button>
      </form>
    </div>
  );
}