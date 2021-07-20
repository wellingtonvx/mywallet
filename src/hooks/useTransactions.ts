import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

export function useTransactions() {
  const context = useContext(TransactionContext);

  return context;
}
