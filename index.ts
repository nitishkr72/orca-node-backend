import express from "express";
import employeeRouter from "./src/routes/employeeRoutes";
import issueRouter from "./src/routes/issueRoutes";
import teamRouter from "./src/routes/teamRoutes";
import projectRouter from "./src/routes/projectRoutes";
import { connectDb } from "./src/utils/db";

const app = express();

connectDb();

app.use("/emp", employeeRouter);
app.use("/project", projectRouter);
app.use("/team", teamRouter);
app.use("/issue", issueRouter);

app.get("/", (req, res) => {
  res.send("Health OK");
});

app.listen(2000, () => {
  console.log("Server is listening to port 2000");
});
