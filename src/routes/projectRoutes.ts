import { get, post } from "./../controllers/projectController";
import express from "express";

const projectRouter = express.Router();

projectRouter.get("/", get);

projectRouter.post("/", post);

export default projectRouter;
