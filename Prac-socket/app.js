const express = require("express");
const { createServer } = require("http");

const app = express();
const http = createServer(app);

const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

http.listen(3000, () => {
  console.log("서버가 요청을 받을 준비가 됐어요");
});
