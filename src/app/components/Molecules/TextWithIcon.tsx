import React from 'react';
import Text from '@/app/components/Atoms/Text';

type Props = {
  Icon: JSX.ElementType;
  textContent: string;
  className?: string;
};
const TextWithIcon = ({ Icon, textContent, className }: Props) => {
  return (
    <div className={'flex ' + className}>
      <Text content={textContent} className='text-sm'/>
      <Icon />
    </div>
  );
};

export default TextWithIcon;
