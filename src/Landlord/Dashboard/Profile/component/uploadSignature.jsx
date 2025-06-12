import React, { useState } from "react";
import ButtonSpinner from "../../../../component/ButtonSpinner";
import { updateSignature } from "../../../../services/queries";
import { toast } from "react-toastify";
import { useAuth } from "../../../../context/authContext";
const UploadSignature = ({ isOpen, onClose, setReload, user }) => {
  if (!isOpen) return null;

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // show preview
    }
  };

  const uploadAvatarsignture = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile); // Change "image" if backend expects something else

    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    setLoading(true);

    try {
      const data = await updateSignature(formData, token); // Pass formData directly
      console.log(data);
      toast.success("Avatar updated successfully!", {
        style: {
          backgroundColor: "#0C2D5B",
          color: "#fff",
          fontSize: "0.8rem",
          padding: "8px 12px",
        },
      });
    } catch (err) {
      console.error("Upload error:", err);
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
        <h2 className="text-2xl font-semibold mb-4">Update Signature</h2>

        {previewUrl ? (
          <img
            src={previewUrl}
            className="w-32 h-32 mx-auto object-cover object-top rounded-full overflow-hidden"
            alt="Preview"
          />
        ) : user?.signature ? (
          <img
            src={user?.signature}
            className="w-32 h-32 mx-auto object-cover object-top rounded-full overflow-hidden"
            alt="Current Avatar"
          />
        ) : (
          <p className="w-32 h-32 mx-auto flex items-center justify-center text-white bg-renatal-blue rounded-full text-3xl">
            s
          </p>
        )}

        <label 
                  className={`flex py-2 gap-x-3 px-8 items-center ml-auto rounded cursor-pointer w-full border-dashed border justify-center border-rental-deep transition mt-4 ${loading ? "pointer-events-none": ""}`}

        >
          <img src="/uploadplus.png" alt="upload icon" className="w-6" />
          <p className="text-sm font-bold text-rental-dark/90">Upload</p>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {selectedFile && (
          <button
            onClick={uploadAvatarsignture}
            disabled={loading}
            className={`py-3 bg-renatal-blue w-full flex justify-center items-center text-center text-white rounded mt-2 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? <ButtonSpinner /> : "Continue"}
          </button>
        )}
      </div>
    </div>
  );
};

export default UploadSignature;
