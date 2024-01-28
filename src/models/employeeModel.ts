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
  hash_pass: {
    type: String,
  },
  employee_id: {
    type: String,
  },
  phone_no: {
    type: String,
    required: true,
  },
  created_on: {
    type: Date,
    default: Date.now,
  },
});

export const Employee: mongoose.Model<any, {}, {}, {}, any, any> =
  mongoose.models.employee || mongoose.model("employee", employee_schema);
