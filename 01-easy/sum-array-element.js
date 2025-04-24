export function sumArrayElements(arr = []) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}