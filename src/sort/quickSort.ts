// Avg - O(n log n)
//
// Worst - O(n²)

const partition = (arr: number[], lo: number, hi: number): number => {
  const pivot = Math.floor(Math.random() * (hi - lo)) + lo;

  [arr[hi], arr[pivot]] = [arr[pivot], arr[hi]];

  let j = lo;

  for (let i = lo; i < hi; i++) {
    if (arr[i] < arr[hi]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }

  [arr[hi], arr[j]] = [arr[j], arr[hi]];

  return j;
};

const qs = (arr: number[], lo: number, hi: number): number[] => {
  if (lo >= hi) {
    return arr;
  }

  const pivot = partition(arr, lo, hi);

  qs(arr, lo, pivot - 1);
  qs(arr, pivot + 1, hi);

  return arr;
};

export default function quickSort(arr: number[]): number[] {
  return qs(arr, 0, arr.length - 1);
}
