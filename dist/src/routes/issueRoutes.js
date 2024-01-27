"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const issueController_1 = require("../controllers/issueController");
const issueRouter = express_1.default.Router();
issueRouter.get("/", issueController_1.get);
issueRouter.post("/", issueController_1.post);
exports.default = issueRouter;
