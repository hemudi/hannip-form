import axios from 'axios';
import { BookmarkContent } from '../user';
import { getCookie } from 'cookies-next';
import { COOKIE_NAME } from '@constants/cookieName';

const IDEA_API_URL = `${process.env.NEXT_PUBLIC_API_FE_URL}/ideas`;

export const bookmarkIdea = async (idea: string) => {
  const token = getCookie(COOKIE_NAME.ACCESS);

  try {
    const response = await axios.post(
      IDEA_API_URL,
      { content: idea },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('POST 요청에 실패했습니다:', error);
    throw error;
  }
};

export const deleteIdea = async (id: string) => {
  try {
    const token = getCookie(COOKIE_NAME.ACCESS);

    if (!token) return;
    const res = await axios.delete<BookmarkContent>(IDEA_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { id },
    });

    return res;
  } catch (error) {
    console.error('DELETE 요청에 실패했습니다:', error);
    throw error;
  }
};

export const getBookmarkIdeaList = async (): Promise<BookmarkContent[]> => {
  const token = getCookie(COOKIE_NAME.ACCESS);

  const res = await axios.get<BookmarkContent[]>(`${IDEA_API_URL}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const ideaList = res.data;
  return ideaList;
};
