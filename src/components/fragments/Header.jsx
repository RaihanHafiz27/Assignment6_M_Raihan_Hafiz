import { Button } from "../elements/Button";
import { Search } from "../elements/Search";
import { SunIcon } from "../../../public/icons/Sun";
import { MoonIcon } from "../../../public/icons/Moon";

export const Header = (props) => {
  const { title, value, inputChange, onSearch, handleDarkMode, isDarkMode } =
    props;

  return (
    <nav className="flex justify-center w-full bg-blue-500 dark:bg-gray-500/30">
      <div className="flex justify-between w-4/5 py-4">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="flex items-center justify-center">
          <form onSubmit={onSearch}>
            <Search value={value} inputChange={inputChange} />
            <Button />
          </form>
          <button className="w-8 h-8 ml-6" onClick={handleDarkMode}>
            {isDarkMode === true ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
};
