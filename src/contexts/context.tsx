import React, { createContext, useReducer, FC } from 'react';
import { Actions, ProviderProps } from '../types/context'

const initState = {
  isDrawerOpen: false
}

export type States = typeof initState;

const reducer = (state: States, action: Actions) => {
  switch (action.type) {
    case 'CHANGE_IS_DRAWER_OPEN':
      return {
        ...state,
        isDrawerOpen: action.bool
      }
    default:
      return state;
  }
}

interface ContextProps {
  state: States;
  dispatch: React.Dispatch<Actions>;
}

export const Context = createContext({} as ContextProps);

const Provider: FC<ProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  );
}

export default Provider;