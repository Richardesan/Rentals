import React, { useState, useEffect } from "react";
import Card from "./component/Card";
import Modal from "./component/Modal";
import TransactionTable from "./component/TransactionTable";
import { getTransaction, getWalletBalance } from "../../../services/queries";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/authContext";
import CardSkeleton from "./component/cardSkeleton";
import DepositModal from "./component/depositModal";
const Wallet = () => {
  const { token } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [openDeposit, setOpenDeposit] = useState(false);
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState("");
  const [walletTransactions, setwalletTransactions] = useState([]);

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

  const transactions = async () => {
    try {
      const data = await getTransaction({ token });
      setwalletTransactions(data?.data?.balance);
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
      transactions();
    }
  }, [token, reload]);

  console.log(walletTransactions);
  if (loading) {
    return <CardSkeleton />;
  }

  function addCommas(number) {
    if (!number || isNaN(Number(number))) return number;

    const fixed = Number(number).toFixed(2); // Ensures 2 decimal places
    const [intPart, decimalPart] = fixed.split(".");

    const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return `${formattedInt}.${decimalPart}`;
  }

  return (
    <section>
      <Card
        open={() => setOpenModal(true)}
        deposit={() => setOpenDeposit(true)}
        balance={balance}
      />

      {openModal && (
        <Modal onClose={() => setOpenModal(false)} balance={balance} />
      )}
      {openDeposit && (
        <DepositModal onClose={() => setOpenDeposit(false)} balance={balance} />
      )}

      {walletTransactions.length < 1 ? (
        <div className="mt-10 text-center h-[40vh] flex flex-col justify-center items-center">
          <p className="mt-2 font-bold text-rental-dark/80">
            Oh snap! There is nothing here
          </p>
          <p className="mt-4 text-xs">You do not have any Transactions yet</p>
        </div>
      ) : (
        <div className="mt-14">
          <TransactionTable walletTransactions={walletTransactions} />
        </div>
      )}
    </section>
  );
};

export default Wallet;
