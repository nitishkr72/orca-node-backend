import { get, post, signin } from "./../controllers/employeeController";
import express from "express";

const employeeRouter = express.Router();

employeeRouter.get("/", get);
employeeRouter.post("/", post);
employeeRouter.post("/signin", signin);

export default employeeRouter;
