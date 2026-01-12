import { Types } from "mongoose";

export interface IUserProfile {
  user_id: Types.ObjectId;

  user_type: "donor" | "requester";

  profile_completed: boolean;

  date_of_birth: Date;
  age: number;

  gender: "male" | "female";

  weight: number;

  blood_group: string;

  division: string;
  district: string;

  has_disease: boolean;
  disease_details?: string;

  smokes: boolean;
  takes_drugs: boolean;

  last_donate_date?: Date;
  availability_locked_until?: Date;

  is_available: boolean;

  whatsapp_number?: string;
  facebook_link?: string;

  createdAt?: Date;
  updatedAt?: Date;
}
