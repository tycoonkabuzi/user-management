import { useState } from "react";
import { useUser } from "../context/UserContext";

const AddUser = () => {
  const { addUser } = useUser();
  const [user, setUser] = useState([]);
  const getDataFromForm = (e) => {
    const theInput = e.target.name;
    setUser((prev) => ({
      ...prev,
      id: Date.now(),
      [theInput]: e.target.value,
    }));
  };

  return (
    <div>
      <h2>Add user</h2>
      <form>
        <input
          name="name"
          type="text"
          onChange={getDataFromForm}
          placeholder="Name"
          value={user.name}
          required
        />
        <input
          name="surname"
          type="text"
          onChange={getDataFromForm}
          placeholder="Surname"
          value={user.surname}
          required
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addUser(user);
            setUser({ name: "", surname: "" });
          }}
        >
          Add user
        </button>
      </form>
    </div>
  );
};
export default AddUser;
