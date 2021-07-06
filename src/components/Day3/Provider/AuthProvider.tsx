import React, { useState } from "react";

type User = null | { username: string };

type CreateContextParamList = {
  user: User;
  login: () => void;
  logout: () => void;
};

export const AuthContext = React.createContext<CreateContextParamList>({
  user: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: async () => setUser({ username: "bob" }),
        logout: () => setUser(null),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
