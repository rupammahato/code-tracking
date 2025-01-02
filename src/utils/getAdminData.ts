import User from '@/models/userModels';
import { connect } from '@/dbConfig/dbConfig';
import type { Admin } from '@/types/admin';
import type { Student } from '@/types/student';

export async function getAdmins(): Promise<Admin[]> {
    await connect();
    const admins = await User.find({ isAdmin: true }).select('-password').lean();

    return admins.map((admin: any) => ({
        id: admin._id.toString(),
        _id: admin._id.toString(),
        name: admin.name,
        email: admin.email,
        phone: admin.phone || null,
        college: admin.college || null,
        state: admin.state || null,
        city: admin.city || null,
        gender: admin.gender || null,
        yearOfStudy: admin.yearOfStudy || null,
        referredByMIP: admin.referredByMIP || null,
        MIPID: admin.MIPID || null,
        isVerified: admin.isVerified || false,
        isAdmin: admin.isAdmin,
        createdAt: admin.createdAt?.toString(),
        updatedAt: admin.updatedAt?.toString(),
    })) as Admin[];
}

export async function getStudents(): Promise<Student[]> {
    await connect();
    const students = await User.find({ isAdmin: false }).select('-password').lean();

    return students.map((student: any) => ({
        id: student._id.toString(),
        _id: student._id.toString(),
        name: student.name,
        email: student.email,
        phone: student.phone,
        college: student.college,
        gender: student.gender,
        yearOfStudy: student.yearOfStudy,
    })) as Student[];
}