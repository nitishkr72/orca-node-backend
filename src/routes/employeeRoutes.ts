import express from "express";
import { Employee } from "../models/employeeModel";

const employeeRouter = express.Router();

employeeRouter.get("/", async (req, res) => {
  const emp = await Employee.find();

  res.json(JSON.stringify(emp));
});

export default employeeRouter;
