import mongoose, { Schema } from "mongoose";

const employee_schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  employee_id: {
    type: String,
  },
  phone_no: {
    type: String,
    required: true,
  },
});

export const Employee =
  mongoose.models.employee || mongoose.model("employee", employee_schema);
