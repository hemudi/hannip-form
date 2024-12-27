import { COOKIE_NAME } from '@constants/cookieName';
import axios from 'axios';
import { getCookie } from 'cookies-next';

const USER_API_URL = `${process.env.NEXT_PUBLIC_API_FE_URL}/users`;

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

export interface UserInfoType extends Omit<UserInfoResponse, 'profile_image_url'> {
  profileImageUrl: string;
}

export const getUser = async (): Promise<UserInfoType> => {
  const token = getCookie(COOKIE_NAME.ACCESS);

  const res = await axios.get<UserInfoResponse>(USER_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { profile_image_url, ...rest } = res.data;
  return { profileImageUrl: profile_image_url, ...rest };
};

export const deleteUser = async () => {
  const token = getCookie(COOKIE_NAME.ACCESS);
  const res = await axios.delete(USER_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const getChannelInfo = async (): Promise<ChannelInfo> => {
  const token = getCookie(COOKIE_NAME.ACCESS);

  const res = await axios.get<UserInfoResponse>(USER_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { channel_description, category } = res.data;
  return { description: channel_description, category: category };
};

export const checkChannelInfo = async (): Promise<boolean> => {
  const token = getCookie(COOKIE_NAME.ACCESS);

  const res = await axios.get<boolean>(`${USER_API_URL}/channel`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const isChannelInfo = res.data;
  return isChannelInfo;
};

export const editChannelInfo = async (channelInfo: ChannelInfo) => {
  const token = getCookie(COOKIE_NAME.ACCESS);

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
