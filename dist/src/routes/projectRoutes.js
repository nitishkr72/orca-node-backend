"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const projectController_1 = require("./../controllers/projectController");
const express_1 = __importDefault(require("express"));
const projectRouter = express_1.default.Router();
projectRouter.get("/", projectController_1.get);
projectRouter.post("/", projectController_1.post);
exports.default = projectRouter;
