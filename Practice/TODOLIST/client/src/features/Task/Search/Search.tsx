import { setSearchValue } from "@features/Task/Search/slices/SearchValueSlice";
import { useAppDispatch, useAppSelector } from "@app/redux/store";
import { handlerSwitchIcon } from "@shared/utils/handlerSwitchIcon";
import { Input } from "@widgets/components/Input/Input";

export const Search = () => {
  const dispatch = useAppDispatch();

  const searchValue = useAppSelector((state) => state.searchValue.searchValue);

  const setSearchValueHandler = (value: string) => {
    dispatch(setSearchValue(value));
  };

  return (
    <Input
      value={searchValue}
      type="text"
      placeholder="Search..."
      onChange={(e) => setSearchValueHandler(e.target.value)}
      children={handlerSwitchIcon("Search")}
    />
  );
};
