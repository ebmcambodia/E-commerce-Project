import { UserDto } from "./user";

export interface AddressDto{
    id: number|null;
    firstName:string;
    lastName:string;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    userId: number | null;
}

export interface AddAddressDto{
    firstName:string;
    lastName:string;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    userId: number | null;
}