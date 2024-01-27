import express from "express";
import employeeRouter from "./src/routes/employee";
import issueRouter from "./src/routes/issue";
import teamRouter from "./src/routes/team";
import projectRouter from "./src/routes/project";

const app = express();

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
