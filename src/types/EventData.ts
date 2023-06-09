import { ActionType } from './data';
export type Dispatch = (action: Action) => void;


export type Action = {
    type: ActionType, 
    data?: {
      profile: Profile, 
      step: number, 
      dates: Date[]
    }
};

export type Event = {
  id?: string, 
  name?: string, 
  date?: string, 
  time?: string,
  dates: Date[]
};

export type State = {
  step?: number,
  event: {
    dates: Date[]
    contacts: Profile[]
  }
};

export type ProviderProps = {children: React.ReactNode}