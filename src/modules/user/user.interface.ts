import { Types } from "mongoose";

export interface IUserProfile {
  user_id: Types.ObjectId;
  user_type: "donor" | "requester";
  profile_completed: boolean;
  phone_number: string;
  date_of_birth: Date;
  age: number;
  gender: "male" | "female";
  weight: number;
  blood_group: string;
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
  whatsapp_number?: string;
  facebook_link?: string;

  createdAt?: string;
  updatedAt?: string;
}

/*
user_type: "donor" | "requester";
  profile_completed: true;
  phone_number: string;
  date_of_birth: Date;
  gender: "male" | "female";
  weight: number;
  blood_group: string;
  division: string;
  district: string;
  area:string
  has_disease: boolean;
  disease_details?: string;
  smokes: boolean;
  takes_drugs: boolean;
  last_donate_date?: Date;
  is_available: boolean; (last_donate_date + 120 days === today then can select yes and value true ,)
  whatsapp_number?: string;
  facebook_link?: string;
*/
