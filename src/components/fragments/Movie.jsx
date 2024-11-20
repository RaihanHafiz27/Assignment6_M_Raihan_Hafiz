export const Movie = (props) => {
  const movies = props;
  // console.log(movies);

  return (
    <div className="w-4/5 h-auto py-4 ">
      <ul className="grid grid-cols-5 gap-6 ">
        {movies &&
          movies.props.map((movie) => (
            <li
              key={movie.imdbID}
              className="relative flex flex-col w-full max-w-xs transition duration-300 transform rounded-md bg-amber-500 dark:bg-gray-200 hover:scale-105"
            >
              <div className="w-full duration-300 h-52 2xl:h-80 ">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="object-cover w-full h-full rounded-t-md "
                />
              </div>
              <div className="flex items-center justify-center flex-grow py-2 text-sm font-semibold text-gray-800 ">
                {movie.Title.length < 20 ? (
                  <p>{movie.Title}</p>
                ) : (
                  <p>{movie.Title.substring(0, 15)}...</p>
                )}
              </div>
              <div className="absolute top-1 left-1">
                <p className="px-4 py-1 text-sm rounded-md bg-amber-600">
                  {movie.Year}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
