import axios from 'axios';
import { BookmarkContent } from '../user';
import { getAccessToken } from '@utils/cookie';

const IDEA_API_URL = `${process.env.NEXT_PUBLIC_API_FE_URL}/ideas`;

export const bookmarkIdea = async (idea: string) => {
  const token = await getAccessToken();

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
    const token = await getAccessToken();

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
  const token = await getAccessToken();

  const res = await axios.get<BookmarkContent[]>(`${IDEA_API_URL}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const ideaList = res.data;
  return ideaList;
};
