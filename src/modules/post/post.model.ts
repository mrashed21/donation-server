import { Schema, model } from "mongoose";
import { IPostInterface } from "./post.interface";

/* requester sub-schema */
const requesterSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    division: { type: String, required: true },
    district: { type: String, required: true },
    attribute_value_status: {
      type: String,
      enum: ["active", "in-active"],
    },
  },
  { _id: false }
);

/* post schema */
const postSchema = new Schema<IPostInterface>(
  {
    blood_group: {
      type: String,
      required: true,
    },
    division: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    hospital_name: {
      type: String,
      required: true,
    },
    required_date: {
      type: String,
      required: true,
    },
    contact_number: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accept", "reject", "cancel"],
      default: "pending",
    },
    requester_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    donar_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    requested_by: {
      type: requesterSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const PostModel = model<IPostInterface>("Post", postSchema);
