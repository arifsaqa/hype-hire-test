import React from 'react';
import Avatar from '../Atoms/Avatar';
import Text from '../Atoms/Text';
import Button from '../Atoms/Button';
import { User } from '@/types';

const UserCard = ({ id, name, avatarUrl, flagUrl, subTitle }: User) => {
  const classNames = [
    'left-[7%] scale-90',
    'left-1/2 -translate-x-1/2 z-10',
    'right-[7%] scale-90',
  ];

  return (
    <div
      className={
        'absolute max-w-sm shadow-xl rounded-xl bg-white py-8 px-4 flex flex-col items-center ' + classNames[id]
      }>
      <div className="relative w-32 h-32">
        <Avatar avatarUrl={avatarUrl} flagUrl={flagUrl} />
      </div>
      <div className="space-y-1 my-4">
        <p className="font-bold text-xl text-black">{name}</p>
        <Text className=" text-blue-600 text-sm text-center" content={subTitle} />
      </div>
      <div className="flex flex-col items-center gap-1 mt-5">
        <Button variant="outlined" className="rounded-lg py-1 px-2">
          Lorem ipsum
        </Button>
        <Button variant="outlined" className="rounded-lg py-1 px-2">
          Lorem ipsum
        </Button>
        <div className="flex">
          <Button variant="outlined" className="rounded-lg py-1 px-2">
            Lorem ipsum
          </Button>
          <Button variant="outlined" className="rounded-lg py-1 px-2">
            Lorem ipsum
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
