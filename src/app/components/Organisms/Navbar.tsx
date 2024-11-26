import React from 'react';
import { Chevron } from '@/app/components/Atoms/Icons';
import Button from '@/app/components/Atoms/Button';
import Logo from '@/app/components/Atoms/Logo';
import TextWithIcon from '@/app/components/Molecules/TextWithIcon';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-between py-2">
        <li className="flex items-center gap-1">
          <Logo />
          <span className="font-black">hyperhire</span>
        </li>
        <li className="md:flex gap-4 hidden ">
          <TextWithIcon Icon={Chevron} textContent="채용" />
          <a href="/#" className="font-black">
            해외 개발자 활용 서비스
          </a>
        </li>
        <li>
          <Button variant="filled-dogger" className='px-3 py-1'>문의하기</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
