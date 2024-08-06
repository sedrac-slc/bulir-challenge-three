import { Customer } from "./Customer";
import { Job } from "./job";

export interface Transaction{
    id: string;
    job: Job;
    customer: Customer;
    valueInitial: number;
    valueFinal: number;
    priceJob: number;
}