import { CustomerType } from "./Customer.type";

export type Order = {
    id: number;
    serviceType: string;
    nbDays: number;
    tva: number;
    totalExcludeTax: number;
    state: string;
    comment?: string;
    customer: CustomerType;
}
