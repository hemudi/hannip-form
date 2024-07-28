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

export const SCRIPT_INIT_STATE: ScriptStoreState = {
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
