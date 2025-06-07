export const setPaginationCount = (pageCount: number) => {
  const arrPage = [];
  for (let i = 1; i <= pageCount; i++) {
    arrPage.push(i);
  }
  return arrPage;
};
