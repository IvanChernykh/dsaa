// O(log n)

export default function binarySearch(arr: number[], needle: number): boolean {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);

    if (arr[mid] === needle) {
      return true;
    }

    if (arr[mid] > needle) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return false;
}
