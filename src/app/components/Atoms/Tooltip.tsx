import React from 'react';

type TooltipProps = {
  variant: 'emerald' | 'cyan';
};
// TODO
const Tooltip = ({ variant }: TooltipProps) => {
  return (
    <div
      className={
        'relative z-10 w-32 p-2 -mt-1 text-sm leading-tight text-[#40E2E8] transform bg-white rounded-lg shadow-lg ' +
        (variant === 'emerald' ? 's' : '')
      }>
      풀타임, 파트타임
      <svg className={'absolute z-10 w-6 h-6 text-white transform fill-current stroke-current'} width="8" height="8">
        <rect x="12" y="-10" width="8" height="8" transform="rotate(45)" />
      </svg>
    </div>
  );
};

export default Tooltip;
