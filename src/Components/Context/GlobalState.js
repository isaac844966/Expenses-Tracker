import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initialState
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 }
  ]
};
//create context
export const GlobabalContext = createContext(initialState);
//Global provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //delete
  function deleteTransaction(id) {
    dispatch({
      type: "Delete_Transaction",
      payload: id
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "Add_Transaction",
      payload: transaction
    });
  }
  return (
    <GlobabalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobabalContext.Provider>
  );
};
