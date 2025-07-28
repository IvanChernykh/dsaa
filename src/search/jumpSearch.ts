// O(√n)

export default function jumpSearch(arr: number[], needle: number): boolean {
  const step = Math.floor(Math.sqrt(arr.length));
  let prev = 0;

  while (prev < arr.length && arr[prev] <= needle) {
    prev += step;
  }

  for (let i = Math.max(0, prev - step); i < Math.min(prev, arr.length); i++) {
    if (arr[i] === needle) {
      return true;
    }
  }

  return false;
}
