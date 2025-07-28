// O(√n)

export default function jumpSearch(arr: number[], needle: number): boolean {
  const step = Math.floor(Math.sqrt(arr.length));
  let curr = 0;

  while (curr < arr.length && arr[curr] <= needle) {
    curr += step;
  }

  for (let i = Math.max(0, curr - step); i < Math.min(curr, arr.length); i++) {
    if (arr[i] === needle) {
      return true;
    }
  }

  return false;
}
