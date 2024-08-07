import { getUser } from '@api/user';
import BookmarkList from '@components/Page/MyPage/BookmarkList';
import UserInfo from '@components/common/UserInfo';

const MyPage = async () => {
  const { scripts, ideas, ...userData } = await getUser();
  return (
    <>
      <UserInfo {...userData} />
      <BookmarkList scripts={scripts} ideas={ideas} />
    </>
  );
};

export default MyPage;
