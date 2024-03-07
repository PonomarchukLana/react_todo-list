export const createNewId = (arr: number[]): number => {
  if (arr.length === 0) {
    return 1
  }

  return Math.max(...arr) + 1
}
