import { Types } from "mongoose";

export type UserType = "donor" | "requester";
export type Gender = "male" | "female";
export type BloodGroup =
  | "A+"
  | "A-"
  | "B+"
  | "B-"
  | "AB+"
  | "AB-"
  | "O+"
  | "O-";

export interface IUserProfile {
  _id: Types.ObjectId;

  user_type: UserType;

  phone_number: string;
  whatsapp_number?: string;
  whatsapp_number_show?: boolean;

  facebook_link?: string;
  facebook_link_show?: boolean;

  date_of_birth: Date;
  age_show?: boolean;

  gender: Gender;
  gender_show?: boolean;

  weight: number;
  weight_show?: boolean;

  blood_group: BloodGroup;

  division: string;
  district: string;
  area: string;

  has_disease: boolean;
  disease_details?: string;

  smokes: boolean;
  takes_drugs: boolean;

  last_donate_date?: Date;
  availability_locked_until?: Date;

  is_available: boolean;

  profile_completed: boolean;

  createdAt?: Date;
  updatedAt?: Date;
}
