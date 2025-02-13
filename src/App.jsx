import { useState } from "react";

import "./App.css";
import UsersList from "./components/UsersList";
import AddUser from "./components/AddUser";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <AddUser />
        <UsersList />
      </UserProvider>
    </>
  );
}

export default App;
