const express = require("express");
const cookieParser = require("cookie-parser");
const { Server } = require("http"); // 1. 모듈 불러오기

const goodsRouter = require("./routes/goods.js");
const usersRouter = require("./routes/users.js");
const authRouter = require("./routes/auth.js");
const connect = require("./schemas");

const app = express();
const http = Server(app); // 2. express app을 http 서버로 감싸기

// const port = 3000;

connect(); // mongoose를 연결합니다.

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("assets"));
app.use("/api", [goodsRouter, usersRouter, authRouter]);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 5. app 대신 http 객체로 서버 열기
// http.listen(port, () => {
//   console.log(port, "포트로 서버가 열렸어요!");
// });

module.exports = http;
