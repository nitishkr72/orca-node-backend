import { Issue } from "../models/issueModel";

export const get = async (_: any, res: any) => {
  const issues = await Issue.find();
  res.json(JSON.stringify(issues));
};

export const post = (req: any, res: any) {
    const issue_json = req.body;

    const issue = new Issue(issue_json);
    issue.save()

    res.send("OK")
}
