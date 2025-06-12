import React, { useState, useEffect } from "react";
import Card from "./component/Card";
import Modal from "./component/Modal";
import TransactionTable from "./component/TransactionTable";
import { getWalletBalance } from "../../../services/queries";
import { toast } from "react-toastify";

import { useAuth } from "../../../context/authContext";
import CardSkeleton from "./component/cardSkeleton";
const Wallet = () => {
  const { token } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState("");
  const getbalance = async () => {
    try {
      const data = await getWalletBalance({ token });
      setBalance(data?.data?.balance);
    } catch (err) {
      console.error("Error fetching listings:", err);
      toast.error("Failed to fetch listings", {
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
  useEffect(() => {
    if (token) {
      getbalance();
    }
  }, [token, reload]);

  if (loading) {
    return <CardSkeleton />
  }
  return (
    <section>
      <Card open={() => setOpenModal(true)} balance={balance} />
      <div className="bg-slate-400">
        {openModal ? (
          <Modal openModal={openModal} onClose={() => setOpenModal(false)} balance={balance}/>
        ) : (
          ""
        )}
      </div>
      <div className="mt-14">
        <TransactionTable />
      </div>
    </section>
  );
};

export default Wallet;
