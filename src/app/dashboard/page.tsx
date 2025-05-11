import { headers } from 'next/headers';
import { getUserData } from '@/utils/getUserData';
import { redirect } from 'next/navigation';
import Header from '@/components/Header';
import UserProfile from '@/components/UserProfile';
import ProgressTracker from '@/components/ProgressTracker';
import RegistrationFee from '@/components/RegistrationFee';
import PaymentHistory from '@/components/PaymentHistory';
import LogoutButton from '@/components/LogoutButton';

async function getData() {
    const headersList = await headers();
    const userId = headersList.get('x-user-id');

    if (!userId) {
        redirect('/login');
    }

    try {
        const userData = await getUserData(userId);
        if (!userData) {
            redirect('/login');
        }
        // Serialize the MongoDB document
        const serializedData = JSON.parse(JSON.stringify(userData));
        return serializedData;
    } catch (error) {
        console.error('Error fetching user data:', error);
        redirect('/login');
    }
}

export default async function DashboardPage() {
    const userData = await getData();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <Header user={userData} />
            <main className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl capitalize text-purple-400 font-bold">Welcome, {userData.name}</h1>
                    <p className="text-gray-300">{userData.email}</p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    <UserProfile user={userData} />
                    <div className="space-y-8">
                        <ProgressTracker />
                        <RegistrationFee />
                    </div>
                </div>
                
                <PaymentHistory  />
                <LogoutButton />
            </main>
        </div>
    );
}

