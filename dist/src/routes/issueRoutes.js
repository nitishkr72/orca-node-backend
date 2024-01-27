"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const issueRouter = express_1.default.Router();
issueRouter.get("/", (req, res) => {
    res.send("<h1>This will return all issue</h1>");
});
exports.default = issueRouter;
