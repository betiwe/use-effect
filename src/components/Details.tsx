import React, { useEffect, useState } from 'react';
import { User } from './User';

interface UserDetails {
  id: number;
  name: string;
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
}

interface DetailsProps {
  info: User | null;
}

const Details: React.FC<DetailsProps> = ({ info }) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (info) {
      setLoading(true);

      // Загрузка деталей пользователя
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
        .then((response) => response.json())
        .then((data) => {
          setUserDetails(data);
          setLoading(false);
        });
    }
  }, [info]);

  if (!info) {
    return <></>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='details-container'>
      <h2>User Details</h2>

      {loading && <div>Loading...</div>}
      
      {!loading && (
        <>
          <img src={userDetails?.avatar} alt="User Avatar" />
          <p className='details-userName'>{userDetails?.name}</p>
          <p>City: {userDetails?.details.city}</p>
          <p>Company: {userDetails?.details.company}</p>
          <p>Position: {userDetails?.details.position}</p>
        </>
      )}
    </div>
  );
};

export default Details;