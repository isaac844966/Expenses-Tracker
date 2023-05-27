import React, { useContext } from "react";
import { GlobabalContext } from "./Context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobabalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>{total}</h1>
    </>
  );
};
export default Balance;
