import { useState } from "react";

import "./App.css";
import UsersList from "./components/UsersList";
import AddUser from "./components/AddUser";

function App() {
  return (
    <>
      <AddUser />
      <UsersList />
    </>
  );
}

export default App;
