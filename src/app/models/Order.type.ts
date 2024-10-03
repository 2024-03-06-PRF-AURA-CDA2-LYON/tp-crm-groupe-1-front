import { CustomerType } from "./Customer.type";

export type OrderState = 'CANCELLED' | 'OPTION' | 'CONFIRMED';

export type OrderType = {
    id?: number;
    serviceType: string;
    nbDays: number;
    tva: number;
    totalExcludeTax: number;
    state: OrderState;
    comment?: string;
    customer: CustomerType;
}

