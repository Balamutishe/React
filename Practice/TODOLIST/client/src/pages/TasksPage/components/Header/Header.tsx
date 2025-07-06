import { Input } from "@widgets/components/Input/Input";
import c from "./Header.module.css";
import { Button } from "@widgets/components/Button/Button";
import { handlerSwitchIcon } from "@shared/utils/handlerSwitchIcon";
import { setSearchValue } from "@entities/redux/SearchValueSlice";
import { useAppSelector, useAppDispatch } from "@entities/redux/store";

export const Header = () => {
  const dispatch = useAppDispatch();

  const searchValue = useAppSelector((state) => state.searchValue.searchValue);

  const setSearchValueHandler = (value: string) => {
    dispatch(setSearchValue(value));
  };

  return (
    <div className={c.header}>
      <Input
        value={searchValue}
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => setSearchValueHandler(e.target.value)}
        children={handlerSwitchIcon("Search")}
      />
      <Button
        text="Add new tasks list"
        variant="primary"
        children={handlerSwitchIcon("Add")}
      />
    </div>
  );
};
