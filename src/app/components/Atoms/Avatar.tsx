'use client';
import Image from 'next/image';
import React from 'react';

const Avatar = ({ avatarUrl, flagUrl }: { avatarUrl: string; flagUrl: string }) => {
  return (
    <div className="relative w-32 h-32">
      <Image src={avatarUrl} height={500} width={500} className="rounded-full" alt="avatar" />;
      <Image src={flagUrl} height={15} width={30} alt="flag" className="absolute bottom-0 right-2" />
    </div>
  );
};

export default Avatar;
