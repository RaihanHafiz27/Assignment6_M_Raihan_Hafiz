import { ACTIONS, initialState } from "./state";

export const movieReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      return { ...state, loading: true, error: null };
    case ACTIONS.FETCH_SUCCESS:
      return { ...state, loading: false, movies: action.payload };
    case ACTIONS.FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ACTIONS.DARK_MODE:
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};
