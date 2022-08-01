import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/BD/Auth";

function PlayContainer() {
  const { user } = useContext(AuthContext);
  //   const handleLogout = async () => {
  //     await signOut();
  //   };
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <>Game play container...</>;
}

export default PlayContainer;
