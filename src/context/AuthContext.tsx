
'use client'
import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

interface AuthContextType {
  authState: {
    username: string;
    id: number;
    status: boolean;
  };
  setAuthState: React.Dispatch<
    React.SetStateAction<{
      username: string;
      id: number;
      status: boolean;
    }>
  >;
}

const defaultAuthState = {
  username: "",
  id: 0,
  status: false,
};

export const AuthContext = createContext<AuthContextType>({
  authState: defaultAuthState,
  setAuthState: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState(defaultAuthState);

  useEffect(() => {
    axios
      .get(
        "https://full-stack-api-janoudi-4dae713142ce.herokuapp.com/auth/auth",
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          setAuthState((prevState) => ({ ...prevState, status: false }));
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};
