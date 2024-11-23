import React from 'react';

type Props = {
  Icon: JSX.ElementType;
  textContent: string;
};
const BottomItem = ({ Icon, textContent }: Props) => {
  return (
    <div className="p-5 w-96 rounded-xl flex gap-5 items-center bg-white bg-opacity-20">
      <div className="rounded-lg bg-white bg-opacity-40 p-4">
        <Icon />
      </div>
      <span className="text-2xl font-black">{textContent}</span>
    </div>
  );
};

export default BottomItem;
