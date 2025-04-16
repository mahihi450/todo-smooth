const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 確認用ルート
app.get("/", (req, res) => {
  res.send("✅ API動作中！");
});

// 必要に応じてルーティングを追加
// 例：
// const taskRoutes = require("./routes/taskRoutes");
// app.use("/api/tasks", taskRoutes);

module.exports = app;
