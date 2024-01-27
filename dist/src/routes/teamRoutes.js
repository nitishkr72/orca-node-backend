"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teamController_1 = require("../controllers/teamController");
const teamRouter = express_1.default.Router();
teamRouter.get("/", teamController_1.get);
teamRouter.post("/", teamController_1.post);
exports.default = teamRouter;
