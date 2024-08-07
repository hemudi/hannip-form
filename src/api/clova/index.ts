import axios from 'axios';

const CLOVA_API_URL = `${process.env.NEXT_PUBLIC_API_FE_URL}/clova`;

export const CLOVA_URL_PATH = {
  IDEA: `${CLOVA_API_URL}/idea`,
  SCRIPT: `${CLOVA_API_URL}/script`,
};

interface IdeaParams {
  category: string;
  info: string;
  content: string;
}

export const createIdea = async (params: IdeaParams) => {
  const res = (await axios.post(CLOVA_URL_PATH.IDEA, params)).data;
  return res;
};

interface ScriptParams {
  idea: string;
  essential: string;
  intro: string;
  ending: string;
  length: string;
  tone: string;
  accent: string;
  trend: string;
}

interface ScriptResponse {
  // status: {
  //   code: string;
  //   message: string;
  // };
  // result: {
  //   outputLength: 155;
  //   seed: number;
  //   stopReason: string;
  //   inputLength: number;
  //   message: {
  //     content: string;
  //     role: string;
  //   };
  // };
  script: string;
  advice: string;
}

export const createScript = async (params: ScriptParams): Promise<ScriptResponse> => {
  const res = (await axios.post(CLOVA_URL_PATH.SCRIPT, params)).data;
  return res;
};
