import axios from 'axios';
import { cookies } from 'next/headers';

const USER_API_URL = `${process.env.NEXT_PUBLIC_API_FE_URL}/users`;

const getCookie = async (name: string) => {
  return cookies().get(name)?.value ?? '';
};

export interface BookmarkContent {
  id: string;
  content: string;
  user_id: string;
}

interface UserInfoResponse {
  id: string;
  email: string;
  nickname: string;
  profile_image_url: string;
  scripts: BookmarkContent[];
  ideas: BookmarkContent[];
}

interface UserInfo extends Omit<UserInfoResponse, 'profile_image_url'> {
  profileImageUrl: string;
}

export const getUser = async (): Promise<UserInfo> => {
  const token = await getCookie('token');

  const res = await axios.get<UserInfoResponse>(USER_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { profile_image_url, ...rest } = res.data;
  return { profileImageUrl: profile_image_url, ...rest };
};
