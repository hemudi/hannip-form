import axios from 'axios';
import { getAccessToken as checkLoginSuccess, getAccessToken } from '@utils/cookie';

const USER_API_URL = `${process.env.NEXT_PUBLIC_API_FE_URL}/users`;
const OAUTH_LOGIN_API_URL = `${process.env.NEXT_PUBLIC_API_FE_URL}/auth`;

export interface BookmarkContent {
  id: string;
  content: string;
  user_id: string;
  created_at: string;
}

export interface ChannelInfo {
  description: string;
  category: string;
}

interface ChannelInfoResponse {
  channel_description: string;
  category: string;
}

interface UserInfoResponse {
  id: string;
  nickname: string;
  profile_image_url: string;
  channel_description: string;
  category: string;
  is_admin: boolean;
  scripts: BookmarkContent[];
  ideas: BookmarkContent[];
}

export const loginOAuth = async ({ code, state }: { code: string; state: string }) => {
  const apiUrl = `${OAUTH_LOGIN_API_URL}/${state}/callback?code=${code}`;
  await axios.get(apiUrl, { withCredentials: true });
  return checkLoginSuccess();
};

export interface UserInfoType extends Omit<UserInfoResponse, 'profile_image_url'> {
  profileImageUrl: string;
}

export const getUser = async (): Promise<UserInfoType> => {
  const token = await getAccessToken();

  console.log(token);

  const res = await axios.get<UserInfoResponse>(USER_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });

  console.log(res);

  const { profile_image_url, ...rest } = res.data;
  return { profileImageUrl: profile_image_url, ...rest };
};

export const deleteUser = async () => {
  const token = await getAccessToken();
  const res = await axios.delete(USER_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const getChannelInfo = async (): Promise<ChannelInfo> => {
  const token = await getAccessToken();

  const res = await axios.get<UserInfoResponse>(USER_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { channel_description, category } = res.data;
  return { description: channel_description, category: category };
};

export const checkChannelInfo = async (): Promise<boolean> => {
  const token = await getAccessToken();

  const res = await axios.get<boolean>(`${USER_API_URL}/channel`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const isChannelInfo = res.data;
  return isChannelInfo;
};

export const editChannelInfo = async (channelInfo: ChannelInfo) => {
  const token = await getAccessToken();

  try {
    const response = await axios.put(
      USER_API_URL,
      {
        channel_description: channelInfo.description,
        category: channelInfo.category,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response;
  } catch (error) {
    console.error('PUT 요청에 실패했습니다:', error);
    throw error;
  }
};
