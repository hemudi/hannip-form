import { create } from 'zustand';

interface ScriptStoreState {
  idea: string;
  essential: string;
  opening: string;
  closing: string;
  length: string;
  tone: string;
  trend: string;
  script: string;
  accent: string;
}

interface ScriptAction {
  setScriptState: (states: Partial<ScriptStoreState>) => void;
  setScript: (script: string) => void;
  clearScriptState: () => void;
}

interface ScriptStore extends ScriptStoreState {
  actions: ScriptAction;
}

const SCRIPT_INIT_STATE: ScriptStoreState = {
  idea: '',
  essential: '',
  opening: '',
  closing: '',
  length: '',
  tone: '',
  trend: '',
  script: '',
  accent: '',
};

const useScriptStore = create<ScriptStore>((set) => ({
  ...SCRIPT_INIT_STATE,
  actions: {
    setScriptState: (state: Partial<ScriptStoreState>) => {
      set(() => ({ ...state }));
    },
    setScript: (script: string) => {
      set(() => ({ script: script }));
    },
    clearScriptState: () => {
      set(() => ({ ...SCRIPT_INIT_STATE }));
    },
  },
}));

export const useScriptAction = () => useScriptStore(({ actions }) => actions);
export const useScriptState = () => useScriptStore(({ actions, ...state }) => state);
export const useScriptParams = () => useScriptStore(({ actions, ...params }) => params);
