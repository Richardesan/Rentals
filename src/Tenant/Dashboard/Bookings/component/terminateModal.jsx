import React, { useState } from "react";
import ButtonSpinner from "../../../../component/ButtonSpinner";
import { terminateBookings } from "../../../../services/queries";
import { useAuth } from "../../../../context/authContext";
import { toast } from "react-toastify";
const TerminateModal = ({ isOpen, onClose, myAgreementID }) => {
  if (!isOpen) return null;
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const isFormIncomplete = description.trim().length < 5;

  const handleTermination = async () => {
    const credentials = {
      terminationReason: description,
    };
    setLoading(true);
    console.log({token, myAgreementID, credentials})
    try {
      const data = await terminateBookings({
        token,
        id: myAgreementID,
        credentials,
      });
        toast.success("Agreement Terminated!", {
          style: {
            backgroundColor: "#0C2D5B",
            color: "#fff",
            fontSize: "0.8rem",
            padding: "8px 12px",
          },
        });
    } catch (err) {
      console.log(err);
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
    }
  };
  return (
    <div
      className="fixed inset-0  bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 "
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 w-full max-w-xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold mb-4">Terminate Agreement</h2>
        <textarea
          name="description"
          placeholder="Termination Reason"
          className="w-full mt-2 border p-2 rounded resize-none outline-none text-rental-dark/70"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
        onClick={handleTermination}
          disabled={loading || isFormIncomplete}
          className={`py-2 bg-renatal-blue w-full flex justify-center items-center text-center text-white rounded mt-2 ${
            loading || isFormIncomplete ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? <ButtonSpinner /> : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default TerminateModal;
