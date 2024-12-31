import { ChannelInfo } from '@apis/user';
import { create } from 'zustand';

interface IdeaStoreState {
  channelInfo?: ChannelInfo;
  isReflectedChannelInfo: boolean;
  content: string;
  ideaList: string[];
  selectedIdea: string;
}

interface IdeaAction {
  setIdeaState: (states: Partial<IdeaStoreState>) => void;
  selectIdea: (idea: string) => void;
  clearIdeaState: () => void;
}

interface IdeaStore extends IdeaStoreState {
  actions: IdeaAction;
}

const IDEA_INIT_STATE: IdeaStoreState = {
  content: '',
  ideaList: [],
  selectedIdea: '',
  isReflectedChannelInfo: false,
};

const useIdeaStore = create<IdeaStore>((set) => ({
  ...IDEA_INIT_STATE,
  actions: {
    setIdeaState: (state: Partial<IdeaStoreState>) => {
      set(() => ({ ...state }));
    },
    selectIdea: (idea: string) => {
      set(() => ({ selectedIdea: idea }));
    },
    clearIdeaState: () => {
      set(() => ({ ...IDEA_INIT_STATE }));
    },
  },
}));

export const useIdeaAction = () => useIdeaStore(({ actions }) => actions);
export const useIdeaState = () => useIdeaStore(({ actions, ...state }) => state);
export const useIdeaParams = () =>
  useIdeaStore(({ actions, ideaList, selectedIdea, ...params }) => params);
