export const unique = (arr: string[]) => {
  const result: string[] = []

  for (const str of arr) {
    if (!result.includes(str)) {
      result.push(str)
    }
  }

  return result
}
