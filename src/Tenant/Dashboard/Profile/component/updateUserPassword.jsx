import React, { useState } from "react";
import { changePassword } from "../../../../services/queries";
import { toast } from "react-toastify";
import { useAuth } from "../../../../context/authContext";
import ButtonSpinner from "../../../../component/ButtonSpinner";
const UpdateUserPassword = ({ isOpen, onClose, setReload }) => {
  if (!isOpen) return null;

  const { token } = useAuth();

  const [userPassword, setUserPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const passwordRules =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{13,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserPassword((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error for that field
  };

  const handleSubmit = () => {
    const { oldPassword, newPassword, confirmPassword } = userPassword;
    const newErrors = {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    };

    let hasError = false;

    if (!oldPassword.trim()) {
      newErrors.oldPassword = "Old password is required.";
      hasError = true;
    }

    if (!newPassword.trim()) {
      newErrors.newPassword = "New password is required.";
      hasError = true;
    } else if (!passwordRules.test(newPassword)) {
      newErrors.newPassword =
        "Use 13+ chars, upper/lowercase, number, and one symbol (!@#$%^&*()_+).";
      hasError = true;
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your new password.";
      hasError = true;
    } else if (newPassword && newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    console.log("Password Values:", userPassword);
    updatePassword();
  };

  const inputStyle =
    "rounded-md border  p-2 outline-none my-1 w-full text-rental-dark/70";
  const isFormIncomplete = Object.values(userPassword).some(
    (value) => value.trim() === ""
  );

  const updatePassword = async () => {
    const credentials = {
      oldPassword: userPassword.oldPassword,
      newPassword: userPassword.newPassword,
    };

    setLoading(true);
    try {
      const data = await changePassword({ token, credentials });
      console.log(data);
      toast.success("Password updated successfully!", {
        style: {
          backgroundColor: "#0C2D5B",
          color: "#fff",
          fontSize: "0.8rem",
          padding: "8px 12px",
        },
      });
    } catch (err) {
      console.log(err?.response?.data?.message);
      toast.error(err?.response?.data?.message, {
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
        <h2 className="text-2xl font-semibold mb-4">Edit Password</h2>

        <label className="block mb-3">
          <span>
            Old Password{" "}
            {errors.oldPassword && (
              <span className="text-sm text-danger mt-1">
                ({errors.oldPassword})
              </span>
            )}
          </span>
          <input
            type="text"
            name="oldPassword"
            value={userPassword.oldPassword}
            onChange={handleChange}
            className={`${
              errors?.oldPassword
                ? "border-danger shadow-danger/50 shadow-sm"
                : "border-rental-deep"
            } ${inputStyle}`}
          />
        </label>

        <label className="block mb-3">
          <span>
            New Password{" "}
            {errors.newPassword && (
              <span className="text-xs text-danger font-bold mt-1">
                ({errors.newPassword})
              </span>
            )}
          </span>
          <input
            type="text"
            name="newPassword"
            value={userPassword.newPassword}
            onChange={handleChange}
            className={`${
              errors?.newPassword
                ? "border-danger shadow-danger/50 shadow-sm"
                : "border-rental-deep"
            } ${inputStyle}`}
          />
        </label>

        <label className="block mb-3">
          <span>
            Confirm Password{" "}
            {errors.confirmPassword && (
              <span className="text-xs text-danger font-bold  mt-1">
                ({errors.confirmPassword})
              </span>
            )}
          </span>
          <input
            type="text"
            name="confirmPassword"
            value={userPassword.confirmPassword}
            onChange={handleChange}
            className={`${
              errors?.confirmPassword
                ? "border-danger shadow-danger/50 shadow-sm"
                : "border-rental-deep"
            } ${inputStyle}`}
          />
        </label>

        <button
          onClick={handleSubmit}
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

export default UpdateUserPassword;
