"use client";
import React, { useState } from "react";
import type { Admin } from "@/types/admin";
import Pagination from "@/components/Pagination";

interface AdminTableProps {
  admins: Admin[];
  onRemove: (adminId: string) => void;
  isLoading: string | null; // adminId that's being processed
}

const ITEMS_PER_PAGE = 5;

const AdminTable: React.FC<AdminTableProps> = ({
  admins,
  onRemove,
  isLoading,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(admins.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentAdmins = admins.slice(startIndex, endIndex);

  return (
    <div className="min-w-full">
      <table className="min-w-full divide-y divide-gray-800">
        <thead className="bg-gray-800">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider whitespace-nowrap"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider whitespace-nowrap"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider whitespace-nowrap"
            >
              College
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider whitespace-nowrap"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-800">
          {currentAdmins.map((admin) => (
            <tr key={admin.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {admin.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {admin.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {admin.college || "N/A"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <button
                  onClick={() => onRemove(admin.id)}
                  disabled={isLoading === admin.id}
                  className="text-red-400 hover:text-red-300 disabled:opacity-50"
                >
                  {isLoading === admin.id ? "Removing..." : "Remove"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default AdminTable;
