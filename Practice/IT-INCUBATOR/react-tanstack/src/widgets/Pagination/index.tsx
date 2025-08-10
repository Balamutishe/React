import type { FC } from "react";

import { getPaginationPages } from "./utils/getPaginationPages";
import c from "./style.module.css";

interface IProps {
  current: number;
  pagesCount: number;
  onPageNumberChange: (page: number) => void;
  isFetching: boolean;
}

const SIBLING_COUNT = 1;

export const Pagination: FC<IProps> = ({
  current,
  pagesCount,
  onPageNumberChange,
}) => {
  const pages = getPaginationPages(current, pagesCount, SIBLING_COUNT);

  return (
    <div className={c.container}>
      <div className={c.pagination}>
        {pages.map((item, idx) =>
          item === "..." ? (
            <span key={`ellipsis-${idx}`}>...</span>
          ) : (
            <button
              type="button"
              key={item}
              onClick={() =>
                item !== current && onPageNumberChange(Number(item))
              }
              disabled={item === current}
            >
              {item}
            </button>
          )
        )}
      </div>
    </div>
  );
};
