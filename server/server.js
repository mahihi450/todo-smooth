const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT || 5000; // ← ここがポイント！
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ サーバー起動: http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB接続失敗", err));
