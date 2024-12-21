import axios from 'axios';
import { BookmarkContent } from '../user';
import { getCookie } from 'cookies-next';

const IDEA_API_URL = `${process.env.NEXT_PUBLIC_API_FE_URL}/ideas`;

export const bookmarkIdea = async (idea: string) => {
  const token = getCookie('access');

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
    const token = getCookie('access');

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
