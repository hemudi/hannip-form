import axios from 'axios';
import { getCookie } from 'cookies-next';

const USER_API_URL = `${process.env.NEXT_PUBLIC_API_FE_URL}/users`;

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

export interface UserInfoType extends Omit<UserInfoResponse, 'profile_image_url'> {
  profileImageUrl: string;
}

export const getUser = async (): Promise<UserInfoType> => {
  const token = getCookie('token');
  console.log(token);

  const res = await axios.get<UserInfoResponse>(USER_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { profile_image_url, ...rest } = res.data;
  return { profileImageUrl: profile_image_url, ...rest };
};
