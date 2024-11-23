import { User } from '@/types';

export const dynamic = 'force-static';

export async function GET() {
  const data = await new Promise<Array<User>>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 0,
          avatarUrl: '/images/dummy/user-photo.png',
          flagUrl: '/images/dummy/flag.png',
          name: 'ABHISHEK GUPTA',
          subTitle: '마케팅 · 2y+',
        },
        {
          id: 1,
          avatarUrl: '/images/dummy/user-photo.png',
          flagUrl: '/images/dummy/flag.png',
          name: 'ABHISHEK GUPTA',
          subTitle: '마케팅 · 2y+',
        },
        {
          id: 2,
          avatarUrl: '/images/dummy/user-photo.png',
          flagUrl: '/images/dummy/flag.png',
          name: 'ABHISHEK GUPTA',
          subTitle: '마케팅 · 2y+',
        },
      ]);
    }, 500);
  });
  return Response.json({ data });
}
