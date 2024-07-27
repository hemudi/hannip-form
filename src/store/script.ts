import { create } from 'zustand';

interface ScriptStoreState {
  idea: string;
  essential: string;
  intro: string;
  ending: string;
  length: string;
  tone: string;
  accent: string;
  trend: string;
  script: string;
  seed?: number;
}

interface ScriptAction {
  setScriptState: (states: Partial<ScriptStoreState>) => void;
  setScript: (script: string, seed: number) => void;
  clearScriptState: () => void;
}

interface ScriptStore extends ScriptStoreState {
  actions: ScriptAction;
}

const SCRIPT_INIT_STATE: ScriptStoreState = {
  idea: '',
  essential: '',
  intro: '',
  ending: '',
  length: '',
  tone: '',
  trend: '',
  script: '',
  accent: '',
};

const parseScript = (script: string) => {
  const removeAside = script
    .replace(/<aside>/g, '')
    .replace(/<\/aside>/g, '')
    .trim();

  //제목 추출
  const titleMatch = script.match(/제목\s*:\s*(.*)/);
  const title = titleMatch ? titleMatch[1].trim() : '제목 없음';

  console.log(title);

  // 장면 1 추출
  const scene1Match = script.match(/장면 1\s*\[.*?\]\s*영상에 어울릴 스크립트\s*:\s*(.*)/);
  const scene1 = scene1Match ? scene1Match[1].trim() : '장면 1 없음';
  console.log(scene1);
  return removeAside;
};

const useScriptStore = create<ScriptStore>((set) => ({
  ...SCRIPT_INIT_STATE,
  actions: {
    setScriptState: (state: Partial<ScriptStoreState>) => {
      set(() => ({ ...state }));
    },
    setScript: (script: string, seed: number) => {
      const parsedScript = parseScript(script);
      set(() => ({ script: parsedScript, seed }));
    },
    clearScriptState: () => {
      set(() => ({ ...SCRIPT_INIT_STATE }));
    },
  },
}));

export const useScriptAction = () => useScriptStore(({ actions }) => actions);
export const useScriptState = () => useScriptStore(({ actions, ...state }) => state);
export const useScriptParams = () => useScriptStore(({ actions, ...params }) => params);
