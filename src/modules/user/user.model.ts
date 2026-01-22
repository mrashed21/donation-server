import { Schema, model } from "mongoose";
import { IUserProfile } from "./user.interface";

const userProfileSchema = new Schema<IUserProfile>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
    },

    user_type: {
      type: String,
      enum: ["donor", "requester"],
      required: true,
    },

    profile_completed: {
      type: Boolean,
      default: false,
    },

    date_of_birth: {
      type: Date,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
      unique: true,
    },

    age: {
      type: Number,
      required: true,
    },

    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },

    weight: {
      type: Number,
      required: true,
    },

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
    area: {
      type: String,
      required: true,
    },

    has_disease: {
      type: Boolean,
      default: false,
    },

    disease_details: String,

    smokes: {
      type: Boolean,
      default: false,
    },

    takes_drugs: {
      type: Boolean,
      default: false,
    },

    last_donate_date: Date,
    availability_locked_until: Date,

    is_available: {
      type: Boolean,
      default: false,
      index: true,
    },

    whatsapp_number: String,
    facebook_link: String,
  },
  { collection: "user", timestamps: true },
);
export const user = model<IUserProfile>("user", userProfileSchema);
