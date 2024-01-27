"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employeeRoutes_1 = __importDefault(require("./src/routes/employeeRoutes"));
const issueRoutes_1 = __importDefault(require("./src/routes/issueRoutes"));
const teamRoutes_1 = __importDefault(require("./src/routes/teamRoutes"));
const projectRoutes_1 = __importDefault(require("./src/routes/projectRoutes"));
const db_1 = require("./src/utils/db");
const app = (0, express_1.default)();
(0, db_1.connectDb)();
app.use("/emp", employeeRoutes_1.default);
app.use("/project", projectRoutes_1.default);
app.use("/team", teamRoutes_1.default);
app.use("/issue", issueRoutes_1.default);
app.get("/", (req, res) => {
    res.send("Health OK");
});
app.listen(2000, () => {
    console.log("Server is listening to port 2000");
});
