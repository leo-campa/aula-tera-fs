import { SEND_BEER } from './action';

const initialState = { beer: {} };
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_BEER:
      return { ...initialState, beer: action.payload };

    default:
      return state;
  }
};
