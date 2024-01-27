import express from "express";

const teamRouter = express.Router();

teamRouter.get("/", (req, res) => {
  res.send("<h1>This will return all team</h1>");
});

export default teamRouter;
