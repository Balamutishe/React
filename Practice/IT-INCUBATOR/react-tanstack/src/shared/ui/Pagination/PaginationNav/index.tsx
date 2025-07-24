import type { FC } from "react";

import c from "../style.module.css";
import { getPaginationPages } from "../utils/getPaginationPages";

interface IProps {
  current: number;
  pagesCount: number;
  onChange: (page: number) => void;
  isFetching: boolean;
}

const SIBLING_COUNT = 1;

export const PaginationNav: FC<IProps> = ({
  current,
  pagesCount,
  onChange,
  isFetching,
}) => {
  const pages = getPaginationPages(current, pagesCount, SIBLING_COUNT);

  return (
    <div className={c.pagination}>
      {pages.map((item, idx) =>
        item === "..." ? (
          <span key={`ellipsis-${idx}`}>...</span>
        ) : (
          <button
            type="button"
            key={item}
            onClick={() => item !== current && onChange(Number(item))}
            disabled={item === current}
          >
            {item}
          </button>
        )
      )}
    </div>
  );
};
