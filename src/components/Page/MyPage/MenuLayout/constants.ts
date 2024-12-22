import { LinkMenu } from '@components/Page/MyPage/MenuLayout';

interface MyPageMenu {
  title: string;
  subMenus: LinkMenu[];
  isPrivate: boolean;
}

export const MY_PAGE_MENUS: MyPageMenu[] = [
  {
    title: '북마크',
    subMenus: [
      { name: '스크립트 북마크 내역', href: '' },
      { name: '아이디어 북마크 내역', href: '' },
    ],
    isPrivate: true,
  },
  {
    title: '고객지원',
    subMenus: [
      { name: '공지사항', href: '' },
      { name: '자주하는 질문', href: '' },
      { name: '문의하기', href: '' },
    ],
    isPrivate: false,
  },
  {
    title: '서비스 이용 관련',
    subMenus: [
      { name: '서비스 이용약관', href: '/assets/file/한입폼_이용약관.pdf' },
      { name: '개인정보 처리방침', href: '/assets/file/한입폼_개인정보처리방침.pdf' },
    ],
    isPrivate: false,
  },
];
