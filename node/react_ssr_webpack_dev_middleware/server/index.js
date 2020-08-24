require("@babel/register");
const app = require("./server.js");
app.listen(3030,() => console.log("listening on *:3030"));