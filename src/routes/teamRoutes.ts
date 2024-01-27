import express from "express";
import { get, post } from "../controllers/teamController";

const teamRouter = express.Router();

teamRouter.get("/", get);
teamRouter.post("/", post);

export default teamRouter;
