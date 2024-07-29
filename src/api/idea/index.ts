import axios from 'axios';
import { BookmarkContent } from '@api/user';
import { getCookieToDocument } from '@utils/cookie/client';

const IDEA_API_URL = `${process.env.NEXT_PUBLIC_API_FE_URL}/ideas`;

export const bookmarkIdea = async (idea: string) => {
  const token = await getCookieToDocument('token');
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

export const getIdeas = async (token: string): Promise<BookmarkContent[]> => {
  try {
    const response = await axios.get<BookmarkContent[]>(IDEA_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('GET 요청에 실패했습니다:', error);
    throw error;
  }
};

export const deleteIdea = async (id: string) => {
  try {
    const token = await getCookieToDocument('token');

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
