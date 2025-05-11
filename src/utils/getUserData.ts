import User from '@/models/userModels';
import { connect } from '@/dbConfig/dbConfig';
import type { User as UserType } from '@/types/user';

export async function getUserData(userId: string): Promise<UserType> {
    try {
        await connect();
        const user = await User.findById(userId)
            .select('-password')
            .lean();

        if (!user) {
            throw new Error('User not found');
        }

        // Convert MongoDB _id to string
        const serializedUser = {
            ...user,
            _id: user._id.toString(),
            createdAt: user.createdAt?.toString(),
            updatedAt: user.updatedAt?.toString()
        };

        return serializedUser as UserType;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}
