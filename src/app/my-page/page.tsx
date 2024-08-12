import BookmarkList from '@components/Page/MyPage/BookmarkList';
import UserInfo from '@components/common/UserInfo';

// interface UserInfoData {
//   id: string;
//   email: string;
//   nickname: string;
//   scripts: BookmarkContent[];
//   ideas: BookmarkContent[];
//   profileImageUrl: string;
// }

const MyPage = () => {
  return (
    <>
      <UserInfo />
      <BookmarkList />
    </>
  );
};

export default MyPage;
