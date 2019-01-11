const express = require("express");
const dbp = require("./data/helpers/projectModel.js");
const dba = require("./data/helpers/actionModel.js");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Sanity check");
});

//GET Projects endpoint
server.get("/api/projects", (req, res) => {
    dbp
      .get()
      .then(posts => {
        res.status(200).json(posts);
      })
      .catch(err => {
        res.status(400).json({ message: "Server Error" });
      });
  });


//GET actions endpoint
server.get("/api/actions", (req, res) => {
    dba
      .get()
      .then(actions => {
        res.status(200).json(actions);
      })
      .catch(err => {
        res.status(400).json({ message: "Server Error" });
      });
  });

server.listen(5000, () => console.log("Server running on port 5000"));
