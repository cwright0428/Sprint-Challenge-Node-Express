const express = require("express");
const dbp = require("./data/helpers/projectModel.js");
const dba = require("./data/helpers/actionModel.js");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Sanity check");
});

//GET Projects endpoint
server.get("/api/projects", async (req, res) => {
  try {
    const projects = await dbp.get();
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

//GET actions endpoint
server.get("/api/actions", async (req, res) => {
  try {
    const actions = await dba.get();
    res.status(200).json(actions);
  } catch (error) {
    res.status(400).json({ message: "Server Error" });
  }
});

//GET actions endpoint with ID
server.get("/api/projects/:id", async (req, res) => {
  try {
    const id = await dbp.get(req.params.id);
    res.status(200).json(id);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Not found" });
  }
});

//GET actions endpoint with ID
server.get("/api/actions/:id", async (req, res) => {
  try {
    const id = await dba.get(req.paarams.id);
    res.status(200).json(id);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Server Error" });
  }
});

//Post endpoints
server.post("/api/actions", async (req, res) => {
  try {
    const addAction = await dba.insert(req.body);
    res.status(200).json(addAction);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "The action(s) couldn't be added." });
  }
});

server.post("/api/projects", async (req, res) => {
  try {
    const addProject = await dbp.insert(req.body);
    res.status(200).json(addProject);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "The project(s) couldn't be added." });
  }
});

server.put("/api/actions/:id", async (req, res) => {
  try {
    const edits = await dba.update(req.params.id, req.body);
    res.status(200).json(edits);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "This action can't be updated at this time." });
  }
});

server.put("/api/projects/:id", (req, res) => {
  dbp
    .update(req.params.id, req.body)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "This project can't be updated at this time." });
    });
});

server.delete("/api/actions/:id", (req, res) => {
  dba
    .remove(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(400).json({ message: "Action not deleted" });
    });
});

server.delete("/api/projects/:id", (req, res) => {
  dbp
    .remove(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(400).json({ message: "Project not deleted" });
    });
});

server.get("/api/projects/:id/actions", async (req, res) => {
  try {
    const id = await dbp.getProjectActions(req.params.id);
    res.status(200).json(id);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Not found" });
  }
});
/*server.put("/api/post", (req, res) => {
    const id = req.params.id;
    const post = req.body;
    dbp.update(id, post).then(updated => {
      if (!post.userId || post.text) {
        res
          .status(400)
          .json({ message: "Please provide user ID and text before posting" });
      } else if (!updated) {
        res
          .status(404)
          .json({ message: "The post you wish to update is no longer here" });
      } else {
        res.status(200).json(post);
      }
    });
  });
*/
server.listen(5000, () => console.log("Server running on port 5000"));
