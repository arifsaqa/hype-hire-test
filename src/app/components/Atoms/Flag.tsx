import Image from 'next/image';
import React from 'react';

const Flag = ({ url, className }: { url: string; className?: string }) => {
  return <Image src={url} height={15} width={30} alt="flag" className={className} />;
};

export default Flag;
