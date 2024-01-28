import { Employee } from "../models/employeeModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const get = async (_: any, res: any) => {
  const emp = await Employee.find();
  res.json(JSON.stringify(emp));
};

export const post = async (req: any, res: any) => {
  const emp_json = req.body;

  try {
    const emp = new Employee({
      name: emp_json.name,
      email: emp_json.email,
      hash_pass: bcrypt.hashSync(emp_json.password, 10),
      employee_id: emp_json.employee_id ?? "",
      phone_no: emp_json.phone_no,
    });
    emp.save();
  } catch (error) {}

  res.send("OK");
};

export const signin = async (req: any, res: any) => {
  const employee = await Employee.findOne({
    email: req.body.email,
  });

  const isPasswordTrue = bcrypt.compare(employee.hash_pass, req.body.password);

  if (!employee || !isPasswordTrue) {
    return res
      .status(401)
      .json({ message: "Authentication failed. Invalid User or Password" });
  }

  const token = jwt.sign(
    { email: employee.email, name: employee.name, _id: employee._id },
    "RESTFULAPIs"
  );

  return res.json({ token });
};
