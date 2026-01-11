import { Types } from "mongoose";

export interface requesterInterface {
  name: string;
  email: string;
  phone?: string;
  division: string;
  district: string;
  attribute_value_status: "active" | "in-active";
}

export interface IPostInterface {
  _id?: Types.ObjectId;
  blood_group: string;
  division: string;
  district: string;
  hospital_name: string;
  required_date: string;
  contact_number: string;
  status: "pending" | "accept" | "reject" | "cancel";
  requester_id: Types.ObjectId;
  donar_id?: Types.ObjectId | null;
  requested_by: requesterInterface;
}

export const postSearchableField = [
  "blood_group",
  "division",
  "district",
  "hospital_name",
  "required_date",
];
