import express from "express";

const projectRouter = express.Router();

projectRouter.get("/", (req, res) => {
  res.send("<h1>This will return all project</h1>");
});

projectRouter.post("/", (req, res) => {
  const project = req.body;
  console.log(req.body);
  res.send("ok");
});

export default projectRouter;
