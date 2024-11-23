'use client';
import { User } from '@/types';
import React from 'react';
import UserCard from '../Molecules/UserCard';

const UserCardList = ({ userList }: { userList: Array<User> }) => {

  return (
    <div className='relative'>
      {userList.map((user) => (
          <UserCard {...user} key={user.id}/>
      ))}
    </div>
  );
};

export default UserCardList;
