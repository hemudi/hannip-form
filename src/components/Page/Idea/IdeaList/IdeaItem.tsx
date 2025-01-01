import { bookmarkIdea, deleteIdea } from '@apis/idea';
import BookmarkIcon from '@components/common/Icon/BookmarkIcon';
import { useIdeaAction, useIdeaState } from '@store/idea';
import { MouseEvent, useState } from 'react';
import { toast } from 'react-toastify';

interface IdeaItemProps {
  idea: string;
  isLogin: boolean;
  popModal: () => void;
}

const IdeaItem = ({ idea, isLogin, popModal }: IdeaItemProps) => {
  const { selectedIdea } = useIdeaState();
  const { selectIdea } = useIdeaAction();
  const [bookmarkId, setBookmarkId] = useState<string | null>(null);

  const handleOnSelect = (idea: string) => {
    selectIdea(idea);
  };

  const handleOnClickBookmark = (idea: string) => (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (!isLogin) {
      popModal();
      return;
    }

    if (bookmarkId) {
      deleteIdea(bookmarkId)
        .then(() => {
          toast.success('북마크가 해제되었습니다!');
          setBookmarkId(null);
        })
        .catch(() => {
          toast.success('북마크 해제에 실패했습니다!');
        });
      return;
    }

    bookmarkIdea(idea)
      .then(({ id }) => {
        toast.success('북마크 되었습니다!');
        setBookmarkId(id);
        return id;
      })
      .catch(() => {
        toast.success('북마크에 실패했습니다!');
      });
  };

  return (
    <li
      onClick={() => handleOnSelect(idea)}
      className={`${idea === selectedIdea ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'} flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-lg px-5 py-4 text-body1`}
    >
      <span className="w-full">{idea}</span>
      <div onClick={handleOnClickBookmark(idea)}>
        <BookmarkIcon isChecked={bookmarkId !== null} color="#A5A5A7" />
      </div>
    </li>
  );
};

export default IdeaItem;
