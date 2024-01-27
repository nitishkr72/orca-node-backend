import express from "express";

const issueRouter = express.Router();

issueRouter.get("/", (req, res) => {
  res.send("<h1>This will return all issue</h1>");
});

export default issueRouter;
