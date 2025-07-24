export const getPaginationPages = (
  current: number,
  pagesCount: number,
  siblingCount: number = 1
): (number | "...")[] => {
  const totalPageNumbers = siblingCount * 2 + 5;

  if (pagesCount > totalPageNumbers) {
    const leftSiblingIndex = Math.max(current - siblingCount, 1);
    const rightSiblingIndex = Math.min(current + siblingCount, pagesCount);

    const showLeftDots = leftSiblingIndex > 2;
    const showRightDots = rightSiblingIndex < pagesCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = pagesCount;

    type PageItem = number | "...";
    const pages: PageItem[] = [];

    if (showLeftDots && !showRightDots) {
      for (let i = firstPageIndex; i <= leftSiblingIndex; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(pagesCount);
    } else if (!showLeftDots && showRightDots) {
      pages.push(firstPageIndex);
      pages.push("...");
      for (let i = rightSiblingIndex; i <= lastPageIndex; i++) {
        pages.push(i);
      }
    } else if (showLeftDots && showRightDots) {
      pages.push(firstPageIndex);
      pages.push("...");
      for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(lastPageIndex);
    } else {
      for (let i = firstPageIndex; i <= lastPageIndex; i++) {
        pages.push(i);
      }
    }

    return pages;
  }

  return Array.from({ length: pagesCount }, (_, index) => index + 1);
};
