export const dataPageTransform = (
  pageNumber: number,
  pageSize: number,
  elementsCount: number
) => {
  const pagesCount = Math.ceil(pageSize / elementsCount);
  const skipValue = (pageNumber - 1) * pageSize;

  return {
    pagesCount,
    skipValue,
    elementsCount,
  };
};
