import React from 'react';
import Text from '../Atoms/Text';

const FooterBottomItem = ({
  title,
  content,
  subContent,
  lastItem = false,
}: {
  title: string;
  content: string;
  subContent: string;
  lastItem?: boolean;
}) => {
  return (
    <div className={'mt-5 space-y-2 ' + (lastItem ? 'col-span-2 md:col-span-3' : '')}>
      <Text content={title} className="text-xs text-zinc-700" />
      <Text content={content} className="text-sm text-[13px] text-gray-600" />
      <Text content={subContent} className="text-sm text-[13px] text-gray-600" />
    </div>
  );
};

export default FooterBottomItem;
