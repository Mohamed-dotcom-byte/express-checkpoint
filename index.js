const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));
let date = new Date();
let time = date.getHours();
let day = date.getDay();
if (day != 0 && day != 6 && time >= 9 && time <= 17) {
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Home.html");
  });
  app.get("/service", (req, res) => {
    res.sendFile(__dirname + "/Our-services.html");
  });
  app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/Contact-Us.html");
  });
} else {
  app.use("/", (req, res) => {
    res.sendFile(__dirname + "/closed.html");
  });
}
/* create the server */
const port = 5000;
app.listen(port, (err) => {
  if (err) throw err;
  else console.log(`the server is running on port ${port}`);
});
