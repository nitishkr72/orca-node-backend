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
const teamModel_1 = require("../models/teamModel");
const get = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const teams = yield teamModel_1.Team.find();
    res.json(JSON.stringify(teams));
});
exports.get = get;
const post = (req, res) => {
    const team_json = req.body;
    const team = new teamModel_1.Team(team_json);
    team.save();
    res.send("OK");
};
exports.post = post;
