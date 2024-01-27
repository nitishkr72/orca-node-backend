import express from "express";
import { get, post } from "../controllers/issueController";

const issueRouter = express.Router();

issueRouter.get("/", get);
issueRouter.post("/", post);

export default issueRouter;
