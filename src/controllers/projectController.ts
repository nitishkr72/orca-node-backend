import { Project } from "../models/projectModel";

export const get = async (_: any, res: any) => {
  const projects = await Project.find();
  res.json(JSON.stringify(projects));
};

export const post = (req: any, res: any) => {
  const project_json = req.body;
  const project = new Project(project_json);
  project.save();
  res.send("OK");
};
