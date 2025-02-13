import { useUser } from "../context/UserContext";

const UsersList = () => {
  const { user, removeUser } = useUser();
  return (
    <div>
      <h3>List of users</h3>

      {user.map((user) => (
        <p key={user.id}>
          Name:{user.name} and surname: {user.surname}
          <button onClick={() => removeUser(user.id)}>Delete</button>
        </p>
      ))}
    </div>
  );
};
export default UsersList;
