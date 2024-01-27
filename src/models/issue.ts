import mongoose, { Schema, Types } from "mongoose";

const issue_schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  state: {
    type: String,
    required: true,
  },
  assigned_to_emp_id: {
    type: Types.ObjectId,
  },
  date_of_creation: {
    type: Date,
    required: true,
  },
  date_of_completion: {
    type: Date,
  },
  is_completed: {
    type: Boolean,
    required: false,
  },
  team_id: {
    type: Types.ObjectId,
    required: true,
  },
});

export const Issue =
  mongoose.models.issue || mongoose.model("issue", issue_schema);
