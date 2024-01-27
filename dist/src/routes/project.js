"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projectRouter = express_1.default.Router();
projectRouter.get("/", (req, res) => {
    res.send("<h1>This will return all project</h1>");
});
projectRouter.post("/", (req, res) => {
    const project = req.body;
    console.log(req.body);
    res.send("ok");
});
exports.default = projectRouter;
