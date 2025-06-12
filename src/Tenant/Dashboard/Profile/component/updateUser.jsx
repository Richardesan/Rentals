import React, { useState } from "react";
import ButtonSpinner from "../../../../component/ButtonSpinner";
const UserModal = ({
  isOpen,
  onClose,
  updateProfile,
  handleChange,
  formData,
  loading
}) => {
  if (!isOpen) return null;

  const isFormIncomplete = Object.values(formData).some(value => value.trim() === "");

  const inputStyle =
    "rounded-md border border-rental-deep p-2 outline-none my-3 w-full text-rental-dark/70";
  return (
    <div
      className="fixed inset-0  bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 "
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 w-full max-w-xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold mb-4">
          Edit Personal Information
        </h2>

        <div className="space-y-1">
            <div className="flex justify-between gap-x-5">

          <label>
            <span className="">First Name</span>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="First Name"
              className={inputStyle}
            />
          </label>
          <label>
            <span className="">Last Name</span>

            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Last Name"
              className={inputStyle}
            />
          </label>
</div>
<label>
    <span className="">Email</span>
 <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={inputStyle}
          />
</label>
         
<label>
    <span className="">Bio</span>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Bio"
            className="w-full mt-2 border p-2 rounded resize-none outline-none  text-rental-dark/70"
            rows={4}
          />
</label>

        </div>

       
          
        <button
  onClick={updateProfile}
  disabled={loading || isFormIncomplete}
  className={`py-3 bg-renatal-blue w-full flex justify-center items-center text-center text-white rounded mt-2 ${
    loading || isFormIncomplete ? "opacity-50 cursor-not-allowed" : ""
  }`}
>
  {loading ? <ButtonSpinner /> : "Continue"}
</button>

        
      </div>
    </div>
  );
};

export default UserModal;
