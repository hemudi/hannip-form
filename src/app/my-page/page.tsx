import Icon from '@components/common/Icon';
import MenuLayout from '@components/Page/MyPage/MenuLayout';
import { MY_PAGE_MENUS } from '@components/Page/MyPage/MenuLayout/constants';
import UserInfo from '@components/Page/MyPage/UserInfo';
import { ROUTING_PATH } from '@constants/routingPath';
import Link from 'next/link';

const MyPage = () => {
  return (
    <div className="h-full w-full pt-10">
      <UserInfo />
      <div className="h-full w-full bg-gray-50">
        <Link className="flex w-full p-5" href={ROUTING_PATH.CHANNEL_INFO}>
          <div className="flex w-full flex-col justify-center">
            <span className="text-h4 font-semibold">내 채널 정보</span>
            <span>채널 정보 수정 및 관리할 수 있어요</span>
          </div>
          <Icon type="rightDirection" />
        </Link>
        <div className="flex w-full flex-col gap-2">
          {MY_PAGE_MENUS.map(({ title, subMenus }) => (
            <MenuLayout title={title} subMenus={subMenus} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
