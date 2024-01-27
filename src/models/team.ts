import mongoose, { Schema, Types } from "mongoose";

const team_schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  issues_ids: {
    type: [Types.ObjectId],
  },
  employees_id: {
    type: [Types.ObjectId],
  },
});

export const Team = mongoose.models.team || mongoose.model("team", team_schema);
