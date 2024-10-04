import {OrderType} from "./Order.type";

export type CustomerState = 'ACTIVE' | 'INACTIVE';

export type CustomerType = {
  id?: number;
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  state: CustomerState;
  order?: OrderType;
}
