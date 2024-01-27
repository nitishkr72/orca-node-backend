import mongoose, { Schema, Types } from "mongoose";

const project_schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  teams_id: {
    type: [Types.ObjectId], // Team table
  },
  date_of_creation: {
    type: Date,
    required: true,
  },
  created_by: {
    type: Types.ObjectId, //Employee Table
    required: true,
  },
});

export const Project =
  mongoose.models.project || mongoose.model("project", project_schema);
