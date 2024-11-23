'use client';
import React from 'react';
import Slider from 'react-slick';
import BottomItem from '../Molecules/BottomItem';
import { Marketing, Image as ImageIcon, Box, Target } from '@/app/components/Atoms/Icons';

const BottomSliders = () => {
  const datas = [
    { Icon: Marketing, textContent: '해외 마케팅' },
    { Icon: ImageIcon, textContent: '해외 마케팅' },
    { Icon: Box, textContent: '해외 마케팅' },
    { Icon: Target, textContent: '해외 마케팅' },
  ];

  return (
    <Slider autoplay speed={500} variableWidth arrows={false}>
      {datas.map((data, idx) => (
        <div key={idx} className='mx-2'>
          <BottomItem {...data} />
        </div>
      ))}
    </Slider>
  );
};

export default BottomSliders;
