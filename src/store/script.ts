import { TONE } from '@app/script/constants';
import { create } from 'zustand';

interface ScriptStoreState {
  idea: string;
  essential: string;
  length: string;
  tone: string;
  script: string;
  advice: string;
}

interface ScriptAction {
  setScriptState: (states: Partial<ScriptStoreState>) => void;
  setScript: (script: string, advice: string) => void;
  clearScriptState: () => void;
}

interface ScriptStore extends ScriptStoreState {
  actions: ScriptAction;
}

export const SCRIPT_INIT_STATE: ScriptStoreState = {
  idea: '',
  essential: '',
  length: '',
  tone: TONE.FORMAL,
  advice: '',
  script: '',
};

const useScriptStore = create<ScriptStore>((set) => ({
  ...SCRIPT_INIT_STATE,
  actions: {
    setScriptState: (state: Partial<ScriptStoreState>) => {
      set(() => ({ ...state }));
    },
    setScript: (script: string, advice: string) => {
      set(() => ({ script, advice }));
    },
    clearScriptState: () => {
      set(() => ({ ...SCRIPT_INIT_STATE }));
    },
  },
}));

export const useScriptAction = () => useScriptStore(({ actions }) => actions);
export const useScriptState = () => useScriptStore(({ actions, ...state }) => state);
export const useScriptParams = () => useScriptStore(({ actions, ...params }) => params);
