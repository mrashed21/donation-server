import { Schema, model } from "mongoose";
import { IUserProfile } from "./user.interface";

const userProfileSchema = new Schema<IUserProfile>(
  {
    user_type: {
      type: String,
      enum: ["donor", "requester"],
      required: true,
    },

    phone_number: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    whatsapp_number: String,
    whatsapp_number_show: {
      type: Boolean,
      default: true,
    },

    facebook_link: String,
    facebook_link_show: {
      type: Boolean,
      default: true,
    },

    date_of_birth: {
      type: Date,
      required: true,
    },

    age_show: {
      type: Boolean,
      default: true,
    },

    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },

    gender_show: {
      type: Boolean,
      default: true,
    },

    weight: {
      type: Number,
      required: true,
      min: 1,
    },

    weight_show: {
      type: Boolean,
      default: true,
    },

    blood_group: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      required: true,
      index: true,
    },

    division: {
      type: String,
      required: true,
      index: true,
    },

    district: {
      type: String,
      required: true,
      index: true,
    },

    area: {
      type: String,
      required: true,
    },

    has_disease: {
      type: Boolean,
      default: false,
    },

    disease_details: {
      type: String,
      trim: true,
    },

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
      default: true,
      index: true,
    },

    profile_completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "user",
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

userProfileSchema.virtual("age").get(function () {
  if (!this.date_of_birth) return null;

  const today = new Date();
  const dob = new Date(this.date_of_birth);

  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  return age;
});

export const user = model<IUserProfile>("user", userProfileSchema);
