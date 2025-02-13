import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const addUser = (newUser) => {
    setUser((prevUser) => [...prevUser, newUser]);
  };
  const removeUser = (userId) => {
    setUser(user.filter((user) => user.id !== userId));
  };
  return (
    <UserContext.Provider value={{ user, addUser, removeUser }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
