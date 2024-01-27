"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employeeController_1 = require("./../controllers/employeeController");
const express_1 = __importDefault(require("express"));
const employeeRouter = express_1.default.Router();
employeeRouter.get("/", employeeController_1.get);
employeeRouter.post("/", employeeController_1.post);
exports.default = employeeRouter;
