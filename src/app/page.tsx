import Navbar from './components/Organisms/Navbar';
import UserCardList from './components/Organisms/UserCardList';
import BottomSliders from './components/Organisms/BottomSliders';
import { User } from '@/types';
import Footer from './components/Organisms/Footer';

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/users', { cache: 'no-store' });
  const data = await res.json();
  const users = data.data as Array<User>;

  return (
    <>
      <section className="bg-hero bg-center bg-cover bg-no-repeat">
        <div className="max-w-[95%] mx-auto">
          <Navbar />
          <div className="md:grid md:grid-cols-2 md:grid-rows-4 gap-2 py-16">
            <div className="">
              <div className="relative flex items-center justify-start mb-5">
                <div className="relative z-10 w-32 p-2 -mt-1 text-sm leading-tight text-[#40E2E8] transform bg-white rounded-lg shadow-lg">
                  풀타임, 파트타임
                  <svg
                    className="absolute z-10 w-6 h-6 text-white transform fill-current stroke-current"
                    width="8"
                    height="8">
                    <rect x="12" y="-10" width="8" height="8" transform="rotate(45)" />
                  </svg>
                </div>
              </div>
              <div className="relative z-30 inline-flex font-black text-5xl">
                <p>최 최고의 실력을 가진 외국인 인재를 찾고 계신가요?</p>
              </div>
            </div>
            <div className="md:row-span-3 my-3 md:my-0">
              <UserCardList userList={users} />
            </div>
            <div className="col">
              <p className="font-black text-2xl">법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.</p>
              <p className="underline text-lg mt-4">개발자가 필요하신가요?</p>
            </div>
            <div className="hidden md:flex gap-8">
              <div className="max-w-44">
                <hr className="w-40" />
                <p className="font-black text-lg mt-4">평균 월 120만원</p>
                <p className="text-base">임금을 해당 국가를 기준으로 계산합니다.</p>
              </div>
              <div className="max-w-44">
                <hr className="w-40" />
                <p className="font-black text-lg mt-4">최대 3회 인력교체</p>
                <p className="text-base">막상 채용해보니 맞지 않아도 걱정하지 마세요.</p>
              </div>
              <div className="max-w-44">
                <hr className="w-40" />
                <p className="font-black text-lg mt-4">평균 3일, 최대 10일</p>
                <p className="text-base">급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</p>
              </div>
            </div>
            <div className="col-span-2 mt-3 md:mt-0">
              <BottomSliders />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
