import express from "express";
import { Employee } from "../models/employee";
import { connectDb } from "../utils/db";

const employeeRouter = express.Router();

connectDb();

employeeRouter.get("/", async (req, res) => {
  const emp = await Employee.find();

  res.json(JSON.stringify(emp));
});

export default employeeRouter;
