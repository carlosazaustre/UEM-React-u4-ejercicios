import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    id: 1,
    username: "Pepe",
  });

  const updateUsername = (username) => {
    setAuth({ ...auth, username });
  };

  return (
    <AuthContext.Provider value={{ auth, updateUsername }}>
      {children}
    </AuthContext.Provider>
  );
}
