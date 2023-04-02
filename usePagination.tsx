import { useMemo } from "react"

const range = (start: number, end: number) => {
  let length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

const PAGINATION_SEPARATOR = "..."
/**
 * @function usePagination
 * @description Handles the pagination logic and returns the layout of the pagination in the form of
 * `[leftPages, separator, rightPages] | [leftPages, separator, middlePages, separator, rightPages]` depending on number of pages
 */
const usePagination = ({
  pageSize,
  currentPage,
  siblingCount = 1,
  totalPageCount,
}: {
  pageSize: number
  currentPage: number
  siblingCount?: number
  totalPageCount: number
}) => {
  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount + 5

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount,
    )

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount
      let leftRange = range(1, leftItemCount)

      return [...leftRange, PAGINATION_SEPARATOR, totalPageCount]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount,
      )
      return [firstPageIndex, PAGINATION_SEPARATOR, ...rightRange]
      return [firstPageIndex, PAGINATION_SEPARATOR, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [
        firstPageIndex,
        PAGINATION_SEPARATOR,
        ...middleRange,
        PAGINATION_SEPARATOR,
        lastPageIndex,
      ]
    }
  }, [pageSize, siblingCount, currentPage, totalPageCount])

  return paginationRange
}

export default usePagination
