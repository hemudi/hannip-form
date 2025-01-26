import { getChannelInfo } from '@apis/user';
import axios from 'axios';

const CLOVA_API_URL = `${process.env.NEXT_PUBLIC_API_FE_URL}/clova`;

export const CLOVA_URL_PATH = {
  IDEA: `${CLOVA_API_URL}/idea`,
  SCRIPT: `${CLOVA_API_URL}/script`,
};

export interface IdeaParams {
  isReflectedChannelInfo: boolean;
  content: string;
}

interface IdeaPostParams {
  content: string;
  category?: string;
  info?: string;
}

export const createIdea = async ({ content, isReflectedChannelInfo }: IdeaParams) => {
  const params: IdeaPostParams = { content };

  if (isReflectedChannelInfo) {
    const { category, description } = await getChannelInfo();
    params.category = category;
    params.info = description;
  }

  const res = (await axios.post(CLOVA_URL_PATH.IDEA, params)).data;
  return res;
};

interface ScriptParams {
  idea: string;
  essential: string;
  length: string;
  tone: string;
  isReflectedChannelInfo: boolean;
}

interface ScriptPostParams {
  idea: string;
  essential: string;
  length: string;
  category?: string;
  info?: string;
}

interface ScriptResponse {
  script: string;
  advice: string;
}

export const createScript = async ({
  isReflectedChannelInfo,
  ...restParams
}: ScriptParams): Promise<ScriptResponse> => {
  const params: ScriptPostParams = restParams;

  if (isReflectedChannelInfo) {
    const { category, description } = await getChannelInfo();
    params.category = category;
    params.info = description;
  }

  console.log(params);
  const res = (await axios.post(CLOVA_URL_PATH.SCRIPT, params)).data;
  return res;
};
