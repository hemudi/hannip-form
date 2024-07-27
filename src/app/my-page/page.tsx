import { createIdea } from '@api/clova';
import BookmarkList from '@components/Page/MyPage/BookmarkList';
import UserInfo from '@components/common/UserInfo';

const userData = {
  nickname: 'Hemdi',
  email: 'suminhesam@gmail.com',
  profileImageUrl: '/assets/images/main.svg',
};

const MyPage = async () => {
  const ideaList = await createIdea({
    category: '암거나',
    content: '파리올림픽',
    info: '아무거나 올리는 채널',
  });

  console.log(ideaList);
  return (
    <>
      <UserInfo {...userData} />
      <BookmarkList />
    </>
  );
};

export default MyPage;
