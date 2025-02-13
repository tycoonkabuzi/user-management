const UsersList = () => {
  const users = [
    { id: 1, name: "Ntwali", surname: "Kabuzi" },
    { id: 2, name: "Reed", surname: "Kabuzi" },
    { id: 3, name: "James", surname: "Kabuzi" },
    { id: 4, name: "Aksanti", surname: "Kabuzi" },
  ];
  return (
    <div>
      <h3>List of users</h3>

      {users.map((user) => (
        <p key={user.id}>
          Name:{user.name} and surname: {user.surname}
        </p>
      ))}
    </div>
  );
};
export default UsersList;
