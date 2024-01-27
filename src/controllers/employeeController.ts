import { Employee } from "../models/employeeModel";

export const get = async (_: any, res: any) => {
  const emp = await Employee.find();
  res.json(JSON.stringify(emp));
};

export const post = async (req: any, res: any) => {
  const emp_json = req.body;

  try {
    const emp = new Employee(emp_json);

    emp.save();
  } catch (error) {}

  res.send("OK");
};
