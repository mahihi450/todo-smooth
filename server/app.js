const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ ここでルート登録する（appが定義されたあと！）
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// 動作確認用のルート（任意）
app.get("/", (req, res) => {
  res.send("APIサーバー稼働中");
});

module.exports = app;
