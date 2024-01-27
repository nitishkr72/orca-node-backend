"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teamRouter = express_1.default.Router();
teamRouter.get("/", (req, res) => {
    res.send("<h1>This will return all team</h1>");
});
exports.default = teamRouter;
