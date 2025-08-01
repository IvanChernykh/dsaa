import quickSort from "../sort/quickSort";

describe("Quick Sort", () => {
  it("1", () => {
    const arr: number[] = [];

    expect(quickSort(arr)).toEqual([]);
  });

  test("2", () => {
    const arr = [1, 42, 5, 69];

    expect(quickSort(arr)).toEqual([1, 5, 42, 69]);
  });

  test("3", () => {
    const arr = [69, 42, 5, 3, 1];

    expect(quickSort(arr)).toEqual([1, 3, 5, 42, 69]);
  });

  test("4", () => {
    const arr = [69, 42];

    expect(quickSort(arr)).toEqual([42, 69]);
  });
});
