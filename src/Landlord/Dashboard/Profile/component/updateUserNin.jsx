import React, { useState } from "react";
import { useAuth } from "../../../../context/authContext";
import { updateAccount } from "../../../../services/queries";
import { toast } from "react-toastify";
import ButtonSpinner from "../../../../component/ButtonSpinner";

const UpdateUserNin = ({ isOpen, onClose, setReload }) => {
  if (!isOpen) return null;
  const { user, token } = useAuth();

  const [nin, setNin] = useState(user.identificationNumber || "");
  const [loading, setLoading] = useState(false);

  const inputStyle =
    "rounded-md border border-rental-deep p-2 outline-none my-3 w-full text-rental-dark/70";

  const isFormIncomplete = nin.trim().length !== 11;

  const handleChange = (e) => {
    setNin(e.target.value);
  };

  const updateProfile = async () => {
    const formData = {
      identificationNumber: nin,
    };
    setLoading(true);
    try {
      const data = await updateAccount({ token, formData });
      console.log(data);
      toast.success("Profile updated successfully!", {
        style: {
          backgroundColor: "#0C2D5B",
          color: "#fff",
          fontSize: "0.8rem",
          padding: "8px 12px",
        },
      });
    } catch (err) {
      toast.error("Failed to update profile", {
        style: {
          backgroundColor: "#C8170D",
          color: "#fff",
          fontSize: "0.8rem",
          padding: "8px 12px",
        },
      });
    } finally {
      setLoading(false);
      setReload((prev) => !prev);
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 w-full max-w-xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold mb-4">
          Edit Identity Information
        </h2>

        <label>
          <span>Identification Number</span>
          <input
            type="text"
            name="nin"
            value={nin}
            onChange={handleChange}
            placeholder="Identification Number"
            className={inputStyle}
          />
        </label>

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

export default UpdateUserNin;
