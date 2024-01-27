import { Team } from "../models/teamModel";

export const get = async (_: any, res: any) => {
  const teams = await Team.find();
  res.json(JSON.stringify(teams));
};

export const post = (req: any, res: any) => {
  const team_json = req.body;
  const team = new Team(team_json);
  team.save();

  res.send("OK");
};
