export interface Admin {
    id: string; // This should match the expected property
    _id: string;
    name: string;
    email: string;
    phone?: string; // Optional properties
    college?: string;
    state?: string;
    city?: string;
    gender?: string;
    yearOfStudy?: string;
    referredByMIP?: string;
    MIPID?: string;
    isVerified?: boolean;
    isAdmin: boolean;
    createdAt: string;
    updatedAt: string;
}