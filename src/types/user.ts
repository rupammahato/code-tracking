export interface User {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    college?: string;
    state?: string;
    city?: string;
    gender?: string;
    yearOfStudy?: string;
    referredByMIP?: string;
    MIPID?: string;
    isVerified: boolean;
    isAdmin: boolean;
    createdAt: string;
    updatedAt: string;
    [key: string]: any; // Allow for additional dynamic fields
}
