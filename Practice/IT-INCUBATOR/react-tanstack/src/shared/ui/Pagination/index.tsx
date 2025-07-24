import type { FC } from "react";
import { PaginationNav } from "./PaginationNav";

import c from "./style.module.css";

interface IProps {
  current: number;
  pageCount: number;
  onPageNumberChange: (page: number) => void;
  isFetching: boolean;
}

export const Pagination: FC<IProps> = ({
  current,
  pageCount,
  onPageNumberChange,
  isFetching,
}) => {
  return (
    <div className={c.container}>
      <PaginationNav
        current={current}
        pagesCount={pageCount}
        onChange={onPageNumberChange}
        isFetching={isFetching}
      />
    </div>
  );
};
