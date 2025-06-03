import React, { createContext, useContext, useEffect, useState } from "react";
import useCommon from "../hooks/useCommon";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const { accountLogin, logout, profileDetails,signup } = useCommon();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const apiResponse = await profileDetails();
      setUser(apiResponse?.data?.result); 
    } catch (error) {
      console.error("Fetch user error:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, accountLogin, logout, loading, fetchUser,signup }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
