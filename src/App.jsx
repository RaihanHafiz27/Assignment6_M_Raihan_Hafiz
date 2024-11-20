import axios from "axios";
import { Header } from "./components/fragments/Header";
import { useEffect, useReducer, useState } from "react";
import { ACTIONS, initialState } from "./store/state";
import { movieReducer } from "./store/reducer";
import { Movie } from "./components/fragments/Movie";
import { Footer } from "./components/fragments/Footer";

function App() {
  const [state, dispatch] = useReducer(movieReducer, initialState);
  const [querry, setQuerry] = useState("the conjuring");
  const [title, setTitle] = useState("");
  useEffect(() => {
    const fetchMovies = async () => {
      dispatch({ type: ACTIONS.FETCH_START });
      const API_KEY = process.env.OMDB_API_KEY;
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${querry}`
        );
        dispatch({
          type: ACTIONS.FETCH_SUCCESS,
          payload: response.data.Search,
        });
      } catch (error) {
        dispatch({ type: ACTIONS.FETCH_ERROR, payload: error.message });
        console.log(error);
      }
    };
    fetchMovies();
  }, [querry]);

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSearch = (e) => {
    // setQuerry(e.target.value);
    e.preventDefault();
    setQuerry(title);
  };

  const handleDarkMode = () => {
    dispatch({ type: ACTIONS.DARK_MODE });
  };

  // console.log(state.isDarkMode);

  // fetchMovies();

  return (
    <main
      className={`w-full min-h-screen text-slate-200 ${
        state.isDarkMode === true ? "dark bg-gray-900" : "bg-gray-300"
      }`}
    >
      <Header
        handleDarkMode={handleDarkMode}
        isDarkMode={state.isDarkMode}
        title={"ReWatchApp"}
        inputChange={handleInputChange}
        value={title}
        onSearch={handleSearch}
      />
      <div className="w-full h-auto ">
        <div className="flex items-center justify-center w-full min-h-screen">
          <Movie props={state.movies} />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;

//  <Movie props={state.movies} />
