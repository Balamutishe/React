import { useStateSearch } from "@app/store";

export const ClientSearch = () => {
  const { searchValue, setSearchValue } = useStateSearch((state) => state);

  return (
    <input
      type="text"
      name="search"
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
      placeholder="Введите запрос"
      className="w-full px-4 py-3 outline-2 outline-offset-2 outline-gray-500/50 rounded cursor-pointer hover:outline-blue-700/70"
    />
  );
};
