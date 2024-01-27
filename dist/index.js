"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employee_1 = __importDefault(require("./src/routes/employee"));
const issue_1 = __importDefault(require("./src/routes/issue"));
const team_1 = __importDefault(require("./src/routes/team"));
const project_1 = __importDefault(require("./src/routes/project"));
const app = (0, express_1.default)();
app.use("/emp", employee_1.default);
app.use("/project", project_1.default);
app.use("/team", team_1.default);
app.use("/issue", issue_1.default);
app.get("/", (req, res) => {
    res.send("Health OK");
});
app.listen(2000, () => {
    console.log("Server is listening to port 2000");
});
