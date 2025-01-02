"use client";

import { useState } from "react";
import AdminTable from "./AdminTable";
import type { Admin } from "@/types/admin";
import ConfirmationModal from "@/components/ConfirmationModal";
import { FiSearch } from "react-icons/fi";

interface AdminTableWrapperProps {
  admins: Admin[];
}

const AdminTableWrapper: React.FC<AdminTableWrapperProps> = ({ admins }) => {
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedAdminId, setSelectedAdminId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAdmins = admins.filter(
    (admin) =>
      admin.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.college?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRemoveClick = (adminId: string) => {
    setSelectedAdminId(adminId);
    setShowConfirmModal(true);
  };

  const handleRemoveAdmin = async () => {
    if (!selectedAdminId) return;

    setShowConfirmModal(false);
    setIsLoading(selectedAdminId);

    try {
      const response = await fetch(`/api/users/removeAdmin`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ adminId: selectedAdminId }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(`Failed to remove admin: ${response.statusText}`);
      }

      const data = await response.json();

      if (data.success) {
        window.location.reload();
      } else {
        alert(data.message || "Failed to remove admin");
      }
    } catch (error) {
      console.error("Error removing admin:", error);
      alert("Failed to remove admin. Please try again.");
    } finally {
      setIsLoading(null);
      setSelectedAdminId(null);
    }
  };

  return (
    <div className="w-full">
      <div className="p-4 bg-gray-900 rounded-lg mb-4">
        <h2 className="text-xl font-semibold text-purple-400 mb-4">
          Admin List
        </h2>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by name, email, or college..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
          />
        </div>
        {searchTerm && (
          <div className="mt-2 text-sm text-gray-400">
            Found {filteredAdmins.length} result
            {filteredAdmins.length !== 1 ? "s" : ""}
          </div>
        )}
      </div>
      <AdminTable
        admins={filteredAdmins}
        onRemove={handleRemoveClick}
        isLoading={isLoading}
      />
      <ConfirmationModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleRemoveAdmin}
        title="Remove Admin"
        message="Are you sure you want to remove this user's admin privileges?"
        confirmText="Remove"
        cancelText="Cancel"
      />
    </div>
  );
};

export default AdminTableWrapper;
