"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = exports.get = void 0;
const projectModel_1 = require("../models/projectModel");
const get = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield projectModel_1.Project.find();
    res.json(JSON.stringify(projects));
});
exports.get = get;
const post = (req, res) => {
    const project_json = req.body;
    const project = new projectModel_1.Project(project_json);
    project.save();
    res.send("OK");
};
exports.post = post;
