import * as action from './actions';

export interface IAappState {
  counter: number;
}

export const INITIAL_STATE: IAappState = {
  counter: 0
}

export function rootReducer(state:IAappState, action): IAappState {
  switch(action.type) {
    case action.INCREMENT: return { counter: state.counter++ };
    case action.DECREMENT: return { counter: state.counter-- };
  }
  return state;
}
