import IdeaItem from '@components/Page/Idea/IdeaList/IdeaItem';
import LoginModal from '@components/Page/Login/LoginModal';
import { COOKIE_NAME } from '@constants/cookieName';
import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

interface IdeaListProps {
  ideaList: string[];
}

const IdeaList = ({ ideaList }: IdeaListProps) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isLoginModalShow, setIsLoginModalShow] = useState<boolean>(false);

  useEffect(() => {
    setIsLogin(Boolean(getCookie(COOKIE_NAME.ACCESS)));
  }, []);

  return (
    <>
      <ul className="flex h-full w-full select-none flex-col gap-2.5 overflow-y-auto bg-white scrollbar-hide">
        {ideaList.map((idea, index) => (
          <IdeaItem
            idea={idea}
            key={index}
            isLogin={isLogin}
            popModal={() => setIsLoginModalShow(true)}
          />
        ))}
      </ul>
      <LoginModal
        isShow={isLoginModalShow}
        warningText={`아이디어를 북마크하려면`}
        clickModal={() => setIsLoginModalShow((prev) => !prev)}
      />
    </>
  );
};

export default IdeaList;
