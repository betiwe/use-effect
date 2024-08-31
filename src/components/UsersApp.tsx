import { useState } from "react";
import Details from "./Details";
import { List } from "./List";
import { User } from './User';
import './UsersApp.css'

const UsersApp: React.FC = () => {

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <div className="container-app">
      <List onSelectUser={handleSelectUser} />
      <Details info={selectedUser} />
    </div>
  );
};

export default UsersApp;