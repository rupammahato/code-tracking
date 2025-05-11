import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getUserData } from "@/utils/getUserData";
import AdminTableWrapper from "./AdminTableWrapper";
import StudentTable from "./StudentTable";
import { getAdmins, getStudents } from "@/utils/getAdminData";
import AddAdminForm from "./AddAdminForm";
import AdminDetails from "@/components/AdminDetails";
import Header from "./Header"
import LogoutButton from "@/components/LogoutButton";

async function getData() {
  const headersList = await headers();
  const userId = headersList.get("x-user-id");

  if (!userId) {
    redirect("/login");
  }

  try {
    const userData = await getUserData(userId);
    if (!userData || !userData.isAdmin) {
      redirect("/dashboard");
    }
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    redirect("/login");
  }
}

export default async function AdminDashboard() {
  const userData = await getData();
  const admins = await getAdmins();
  const students = await getStudents();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header user={userData} />
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-400">
            Manage administrators and view student registrations
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div id="admin-details" className="w-full">
            <AdminDetails user={userData} />
          </div>

          <div id="add-admin" className="w-full">
            <AddAdminForm />
          </div>

          <div className="w-full pb-8">
            <div className="bg-gray-900 border border-purple-800 rounded-lg pb-6 shadow-xl shadow-black overflow-hidden">
              <div id="admin-list" className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
                <AdminTableWrapper admins={admins} />
              </div>
            </div>
          </div>

          <div className="w-full pb-8">
            <div id="student-list" className="bg-gray-900 border border-purple-800 pb-6 rounded-lg shadow-xl shadow-black overflow-hidden">
              <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
                <StudentTable students={students} />
              </div>
            </div>
          </div>
          <div className="flex pb-16 justify-center">
          <LogoutButton />
        </div>
        </div>
      </div>
    </div>
  );
}
