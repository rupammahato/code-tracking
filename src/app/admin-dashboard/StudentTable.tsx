"use client";
import React, { useState } from "react";
import type { Student } from "@/types/student";
import Pagination from "@/components/Pagination";
import { FiSearch, FiDownload } from "react-icons/fi";

interface StudentTableProps {
  students: Student[];
}

const ITEMS_PER_PAGE = 5;

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isExporting, setIsExporting] = useState(false);

  const totalPages = Math.ceil(students.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentStudents = students.slice(startIndex, endIndex);

  const filteredStudents = students.filter(
    (student) =>
      student.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.college?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExport = () => {
    setIsExporting(true);
    try {
      // Define the headers for the CSV
      const headers = [
        "Name",
        "Email",
        "College",
        "Gender",
        "Year of Study",
        "Phone",
        "State",
        "City",
        "MIP ID",
        "Referred By",
      ];

      // Convert student data to CSV format
      const studentData = students.map((student) => [
        student.name || "",
        student.email || "",
        student.college || "",
        student.gender || "",
        student.yearOfStudy || "",
        student.phone || "",
        student.state || "",
        student.city || "",
        student.MIPID || "",
      ]);

      // Combine headers and data
      const csvContent = [
        headers.join(","),
        ...studentData.map((row) => row.map((cell) => `"${cell}"`).join(",")),
      ].join("\n");

      // Create a Blob containing the CSV data
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

      // Create a download link
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute(
        "download",
        `student_data_${new Date().toLocaleDateString()}.csv`
      );
      document.body.appendChild(link);

      // Trigger the download
      link.click();

      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error exporting data:", error);
      alert("Failed to export data. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-w-full">
      <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-purple-400">
            Student List
          </h2>
          <button
            onClick={handleExport}
            disabled={isExporting}
            className={`flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors ${
              isExporting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FiDownload className="h-4 w-4" />
            {isExporting ? "Exporting..." : "Export to CSV"}
          </button>
        </div>
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
            Found {filteredStudents.length} result
            {filteredStudents.length !== 1 ? "s" : ""}
          </div>
        )}
      </div>
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
              Gender
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider whitespace-nowrap"
            >
              Year
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-800">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {student.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {student.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {student.college}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {student.gender}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {student.yearOfStudy}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="px-6 py-4 text-center text-gray-400">
                No students found
              </td>
            </tr>
          )}
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

export default StudentTable;
