import { useState, useEffect } from 'react';
import { User } from './User';

interface ItemsProps {
  onSelectUser: (user: User) => void;
}

export const List: React.FC<ItemsProps> = ({ onSelectUser }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);


  useEffect(() => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSelectUser = (user: User) => {
    onSelectUser(user);
    setSelectedUserId(user.id);
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li 
            key={user.id} 
            onClick={() => handleSelectUser(user)}
            className={selectedUserId === user.id ? 'selected-user' : ''}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
