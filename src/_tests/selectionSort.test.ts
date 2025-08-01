import selectionSort from "../sort/selectionSort";

describe("Selection Sort", () => {
  test("1", () => {
    const arr = [1, 4, 5, 69, 6, 3, 7, 1];

    expect(selectionSort(arr)).toEqual([1, 1, 3, 4, 5, 6, 7, 69]);
  });

  test("2", () => {
    const arr: number[] = [];

    expect(selectionSort(arr)).toEqual([]);
  });

  test("3", () => {
    const arr = [1, 42, 5, 69];

    expect(selectionSort(arr)).toEqual([1, 5, 42, 69]);
  });

  test("4", () => {
    const arr = [69, 42, 5, 3, 1];

    expect(selectionSort(arr)).toEqual([1, 3, 5, 42, 69]);
  });
});
