"use client";
import React, { useState } from "react";
import axios from "axios";
import ConfirmationModal from "@/components/ConfirmationModal";

const AddAdminForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowConfirmModal(true);
  };

  const handleConfirmAdd = async () => {
    setShowConfirmModal(false);
    setIsLoading(true);
    try {
      const response = await axios.post("/api/users/addAdmin", { email });
      setMessage(response.data.message);
      setEmail(""); // Clear input on success

      if (response.data.success) {
        window.location.reload(); // Reload to show updated admin list
      }
    } catch (error: any) {
      console.error("Error adding admin:", error);
      setMessage(error.response?.data?.message || "Error adding admin");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 shadow-xl shadow-black rounded-lg p-6 mb-8 border border-purple-800"
      >
        <h2 className="text-2xl font-bold mb-6 text-purple-400">
          Add New Admin
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter admin email"
            className="flex-1 bg-gray-800 text-gray-300 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`flex items-center justify-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg font-medium
              ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-purple-700"
              } 
              transition-colors duration-200 min-w-[120px]`}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Adding...
              </>
            ) : (
              "Add Admin"
            )}
          </button>
        </div>
        {message && (
          <p
            className={`mt-4 text-sm ${
              message.includes("successfully")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
      </form>

      <ConfirmationModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleConfirmAdd}
        title="Add Admin"
        message={`Are you sure you want to give admin privileges to ${email}?`}
        confirmText="Add"
        cancelText="Cancel"
      />
    </>
  );
};

export default AddAdminForm;
