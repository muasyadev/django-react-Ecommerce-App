import React from "react";
import { useUser } from "./UserContext";

const User: React.FC = () => {
  const { user } = useUser();

  if (!user) {
    return <p>No user is logged in.</p>;
  }

  return (
    <div>
      <h1>User Information</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default User;
