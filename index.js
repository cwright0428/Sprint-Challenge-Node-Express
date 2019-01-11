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

//GET actions endpoint with ID
server.get("/api/projects/:id", (req, res) => {
  const id = req.params.id;
  dbp
    .get(id)
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res.status(400).json({ message: "Not found" });
    });
});

//GET actions endpoint with ID
server.get("/api/actions/:id", (req, res) => {
  const id = req.params.id;
  dba
    .get(id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(400).json({ message: "Server Error" });
    });
});

//Post endpoints
server.post("/api/actions", (req, res) => {
  dba
    .insert(req.body)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(500).json({ error: "The action(s) couldn't be added." });
    });
});

server.post("/api/projects", (req, res) => {
  dbp
    .insert(req.body)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(500).json({ error: "The project(s) couldn't be added." });
    });
});


server.put('/api/actions/:id', (req, res) => {
    dba.update(req.params.id, req.body)
        .then(response => {
           res
                .status(200)
                .json(response)
        })
        .catch(error => {
            res
                .status(500)
                .json({error: "This action can't be updated at this time." })
        })
});


server.put('/api/projects/:id', (req, res) => {
    dbp.update(req.params.id, req.body)
        .then(response => {
            res
                .status(200)
                .json(response)
        })
        .catch(error => {
            res
                .status(500)
                .json({error: "This project can't be updated at this time." })
        })
})

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
