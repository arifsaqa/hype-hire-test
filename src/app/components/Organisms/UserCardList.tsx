'use client';
import { User } from '@/types';
import React from 'react';
import UserCard from '../Molecules/UserCard';
import { Chevron } from '../Atoms/Icons';

const UserCardList = ({ userList }: { userList: Array<User> }) => {
  return (
    <div className="relative w-full min-h-[26rem]">
      <Chevron className="top-1/2 left-5 absolute cursor-pointer" size={25} direction='left'/>
      {userList.map((user) => (
        <UserCard {...user} key={user.id} />
      ))}
      <Chevron className="top-1/2 right-5 absolute cursor-pointer" size={25} direction='right'/>
    </div>
  );
};

export default UserCardList;
