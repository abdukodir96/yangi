console.log("Web serverni boshlash");
const { Console } = require("console");
const express = require("express");
const app = express();
const http = require("http");
// 1; kirish codelari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: session code
// 3: view ga bog'liq codelar
app.set("views", "views");
app.set("views engine", "ejs");

// 4: Routing code
app.get("/hello", function (req, res) {
  res.end(`<h1 style="background: yellow">Hello world by Leo</h1>`);
});
app.get("/gift", function (req, res) {
  res.end("<h1> siz sovgalar bolimidasiz</h1>");
});

const server = http.createServer(app);
let = PORT = 4000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
