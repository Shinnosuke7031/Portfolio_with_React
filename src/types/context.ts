import { type } from 'os';
import { States } from '../contexts/context';
import { ReactNode } from 'react'

export type GlobalStates = States;

export interface Actions {
  type?: string|string[];
  payload?: string|string[];
  bool: boolean;
}

export type ProviderProps = {
  children: ReactNode;
}
