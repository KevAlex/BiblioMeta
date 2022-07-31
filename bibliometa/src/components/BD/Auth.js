import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useState, useEffect } from "react";

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
}

export function useAuthValue() {
  return useContext(AuthContext);
}
