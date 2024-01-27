import { get, post } from "./../controllers/employeeController";
import express from "express";
import { Employee } from "../models/employeeModel";

const employeeRouter = express.Router();

employeeRouter.get("/", get);
employeeRouter.post("/", post);

export default employeeRouter;
