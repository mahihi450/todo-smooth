const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let fakeUserDB = []; // 仮のユーザーデータ（MongoDBの代わり）

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = fakeUserDB.find((u) => u.email === email);
    if (existingUser) {
      return res.status(400).json({ message: "既に登録済みです" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: Date.now(), name, email, password: hashedPassword };
    fakeUserDB.push(newUser);

    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ message: "登録に失敗しました" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = fakeUserDB.find((u) => u.email === email);
    if (!user) return res.status(404).json({ message: "ユーザーが存在しません" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "パスワードが違います" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: "ログインに失敗しました" });
  }
};