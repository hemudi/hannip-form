const CLOVA_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/clova`;

export const CLOVA_URL_PATH = {
  IDEA: `${CLOVA_API_URL}/idea`,
  SCRIPT: `${CLOVA_API_URL}/script`,
};

interface IdeaParams {
  category: string;
  info: string;
  content: string;
}

export const createIdea = async (params: IdeaParams): Promise<string[]> => {
  const res = await fetch(CLOVA_URL_PATH.IDEA, { method: 'POST', body: JSON.stringify(params) });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
};

interface ScriptParams {
  idea: string;
  essential: string;
  opening: string;
  closing: string;
  length: string;
  tone: string;
  trend: string;
}

interface ScriptResponse {
  status: {
    code: string;
    message: string;
  };
  result: {
    outputLength: 155;
    seed: number;
    stopReason: string;
    inputLength: number;
    message: {
      content: string;
      role: string;
    };
  };
}

export const createScript = async (params: ScriptParams): Promise<ScriptResponse> => {
  const res = await fetch(CLOVA_URL_PATH.SCRIPT, { method: 'POST', body: JSON.stringify(params) });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
};
