import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const ContextProvider = (props) => {
  const [auth, setAuth] = useState(undefined);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};
