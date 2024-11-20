export const initialState = {
  movies: [],
  loading: false,
  error: null,
  isDarkMode: false,
};

export const ACTIONS = {
  FETCH_START: "fetch_start",
  FETCH_SUCCESS: "fetch_success",
  FETCH_ERROR: "fetch_error",
  DARK_MODE: "dark_mode",
};
