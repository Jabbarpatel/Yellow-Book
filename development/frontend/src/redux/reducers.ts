import { DECREAMENT, INCREAMENT } from "./actions";

type State = {
  count: number;
};

const initialState: State = {
  count: 0,
};

export const Reducer = (state: State = initialState, action: {type:string}) => {
  switch (action.type) {
    case INCREAMENT:
      return { ...state, count: state.count + 1 };

    case DECREAMENT:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};
