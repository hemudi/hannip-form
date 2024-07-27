import { create } from 'zustand';

interface SessionStoreState {
  sessionId: string | null;
}

interface SessionStoreAction {
  setSessionId: (sessionId: string | null) => void;
  removeSessionId: () => void;
}

interface SessionStore extends SessionStoreState {
  actions: SessionStoreAction;
}

const SESSION_INIT_STATE: SessionStoreState = {
  sessionId: null,
};

const useSessionStore = create<SessionStore>((set) => ({
  ...SESSION_INIT_STATE,
  actions: {
    setSessionId: (sessionId: string | null) => {
      set(() => ({ sessionId }));
    },
    removeSessionId: () => {
      set(() => ({ sessionId: null }));
    },
  },
}));

export const useSessionAction = () => useSessionStore(({ actions }) => actions);
export const useSessionState = () => useSessionStore(({ sessionId }) => ({ sessionId }));
