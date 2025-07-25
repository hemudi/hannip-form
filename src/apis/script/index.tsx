import axios from 'axios';
import { BookmarkContent } from '../user';
import { getAccessToken } from '@utils/cookie';

const SCRIPT_API_URL = `${process.env.NEXT_PUBLIC_API_FE_URL}/scripts`;

export const bookmarkScript = async (script: string) => {
  const token = await getAccessToken();

  try {
    const response = await axios.post(
      SCRIPT_API_URL,
      { content: script },
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

export const getScriptDetail = async (id: string): Promise<Omit<BookmarkContent, 'user_id'>> => {
  try {
    const token = await getAccessToken();
    const response = await axios.get<BookmarkContent>(`${SCRIPT_API_URL}/${id}`, {
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

export const deleteScript = async (id: string) => {
  try {
    const token = await getAccessToken();

    if (!token) return;
    const res = await axios.delete<BookmarkContent>(SCRIPT_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { id },
    });

    return res.data;
  } catch (error) {
    console.error('DELETE 요청에 실패했습니다:', error);
    throw error;
  }
};

export const getBookmarkScriptList = async (): Promise<BookmarkContent[]> => {
  const token = await getAccessToken();

  const res = await axios.get<BookmarkContent[]>(`${SCRIPT_API_URL}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const scriptList = res.data;
  return scriptList;
};
