import { db } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { UserProfile } from "./user.model";
// create user

const createProfile = async (
  userId: string,
  userType: "donor" | "requester"
) => {
  const result = await UserProfile.create({
    user_id: userId,
    user_type: userType,
  });

  return result;
};
// get all user
const getAllUsers = async () => {
  const result = await db.collection("user").find({}).toArray();
  return result;
};

// get me
const getMe = async (id: string) => {
  return await db.collection("user").findOne({
    _id: new ObjectId(id),
  });
};
// update user

const updateProfile = async (userId: string, payload: any) => {
  const {
    date_of_birth,
    age,
    gender,
    weight,
    blood_group,
    division,
    district,
    has_disease,
    smokes,
    takes_drugs,
  } = payload;

  if (!date_of_birth) {
    throw new Error("Date of Birth is required!");
  }
  if (!age) {
    throw new Error("Age is required!");
  }
  if (!gender) {
    throw new Error("Gender is required!");
  }
  if (!weight) {
    throw new Error(" Weight is required!");
  }
  if (!blood_group) {
    throw new Error(" Blood Group is required!");
  }
  if (!division) {
    throw new Error("Division is required!");
  }
  if (!district) {
    throw new Error("District is required!");
  }
  if (!has_disease) {
    throw new Error("Has Diseas is required!");
  }
  if (!smokes) {
    throw new Error("Smokes is required!");
  }
  if (!takes_drugs) {
    throw new Error("Takes Drugs is required!");
  }

  const result = await UserProfile.findOneAndUpdate(
    { user_id: userId },
    {
      $set: payload,
    },
    {
      new: true,
      runValidators: false,
    }
  );

  if (!result) {
    throw new Error("Profile not found");
  }

  return result;
};

export const userService = { createProfile, getAllUsers, getMe, updateProfile };
