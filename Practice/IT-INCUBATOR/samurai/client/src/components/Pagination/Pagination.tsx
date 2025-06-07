import { FC } from "react";
import { Link } from "react-router";
import c from "./Pagination.module.css";
import { setPaginationCount } from "../../utils/setPaginationCount";

type TPaginationProps = {
  pageCount: number;
  path: string;
};

export const Pagination: FC<TPaginationProps> = ({ pageCount, path }) => {
  return (
    <div className={c.paginationContainer}>
      {pageCount !== 1 &&
        setPaginationCount(pageCount).map((pageNumber) => (
          <Link to={`${path}?page=${pageNumber}`} key={crypto.randomUUID()}>
            {pageNumber}
          </Link>
        ))}
    </div>
  );
};
