import { db } from "@/lib/mongodb";
import { UserProfile } from "./user.model";

// create user

const createProfile = async (
  userId: string,
  userType: "donor" | "requester"
) => {
  const profile = await UserProfile.create({
    user_id: userId,
    user_type: userType,
  });

  return profile;
};
// get all user
const getAllUsers = async () => {
  const result = await db.collection("user").find({}).toArray();
  console.log("result", result);
  return result;
};

// update user

const updateProfile = async (userId: string, payload: any) => {
  const profile = await UserProfile.findOneAndUpdate(
    { user_id: userId },
    {
      $set: payload,
    },
    {
      new: true,
      runValidators: false,
    }
  );

  if (!profile) {
    throw new Error("Profile not found");
  }

  return profile;
};

export const userService = { createProfile, getAllUsers, updateProfile };
