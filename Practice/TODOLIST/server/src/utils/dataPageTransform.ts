export const dataPageTransform = (
  pageNumber: number,
  pageSize: number,
  elementsCount: number
): { pagesCountValue: number; limitValue: number; skipValue: number } => {
  const limitValue = pageSize;
  const pagesCountValue = Math.ceil(pageSize / elementsCount);
  const skipValue = (pageNumber - 1) * pageSize;

  return {
    pagesCountValue,
    limitValue,
    skipValue,
  };
};
