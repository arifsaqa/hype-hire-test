import React from 'react';
import Container from '../Atoms/Container';
import Logo from '../Atoms/Logo';
import Text from '../Atoms/Text';
import FooterTopRightItem from '../Molecules/FooterTopRightItem';
import { Avatar, Code, Gear, Kor } from '../Atoms/Icons';
import FooterBottomItem from '../Molecules/FooterBottomItem';

const Footer = () => {
  return (
    <section>
      <Container className="grid grid-cols-2 md:grid-cols-6 md:grid-rows-2 py-4 gap-5">
        <div className="col-span-2">
          <div className="flex items-center mb-1">
            <Logo white={false} />
            <Text content="hypehire" className="text-stone-800 ml-2" />
          </div>
          <Text content="우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다." className="text-zinc-700 text-sm" />
          <Text content="010-0000-0000" className="text-gray-600 mt-4" />
          <Text content="aaaaa@naver.com" className="text-gray-600 mt-1" />
        </div>
        <FooterTopRightItem Icon={Code} title="해외 개발자 원격 채용" subtitle="바로가기" />
        <FooterTopRightItem Icon={Avatar} title="외국인 원격 채용 (비개발)" subtitle="바로가기" />
        <FooterTopRightItem Icon={Kor} title="한국어 가능 외국인 채용" subtitle="바로가기" />
        <FooterTopRightItem Icon={Gear} title="해외 개발자 활용 서비스" subtitle="바로가기" />
        <FooterBottomItem title="상호명" content="하이퍼하이어" subContent="Hyperhire India Private Limited" />
        <FooterBottomItem title="대표 CEO" content="김주현" subContent="Juhyun Kim" />
        <FooterBottomItem title="사업자등록번호 CIN" content="427-86-01187" subContent="U74110DL2016PTC290812" />
        <FooterBottomItem
          title="주소 ADDRESS"
          content="서울특별시 강남대로 479, 지하 1층 238호 "
          subContent="D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India"
          lastItem
        />
      </Container>
    </section>
  );
};

export default Footer;
