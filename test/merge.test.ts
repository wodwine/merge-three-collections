import { merge } from "../src/merge";

describe("merge test", () => {
  it("1. Normal case: merges three non-empty collections into ascending order", () => {
    const c1 = [9, 7, 5, 3, 1]; // desc
    const c2 = [0, 2, 4, 6, 8]; // asc
    const c3 = [1, 3, 5, 7, 9]; // asc

    const result = merge(c1, c2, c3);
    expect(result).toEqual([0, 1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9]);
  });

  it("2. Negative case: handles negative numbers", () => {
    const c1 = [10, 5, 0, -5];  // desc
    const c2 = [-10, -5, 0];    // asc
    const c3 = [-3, 2, 4];      // asc

    const result = merge(c1, c2, c3);
    expect(result).toEqual([-10, -5, -5, -3, 0, 0, 2, 4, 5, 10]);
  });

  it("3. Duplicate case: handles duplicates correctly", () => {
    const c1 = [5, 5, 3];       // desc
    const c2 = [1, 3, 5];       // asc
    const c3 = [3, 5, 5, 7];    // asc

    const result = merge(c1, c2, c3);
    expect(result).toEqual([1, 3, 3, 3, 5, 5, 5, 5, 5, 7]);
  });

  it("4. Single case: handles single-element arrays", () => {
    const c1 = [3];             // desc
    const c2 = [1];             // asc
    const c3 = [2];             // asc

    const result = merge(c1, c2, c3);
    expect(result).toEqual([1, 2, 3]);
  });

  it("5. Empty case: handles empty collections", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([5, 3, 1], [], [])).toEqual([1, 3, 5]);
    expect(merge([], [1, 2], [3])).toEqual([1, 2, 3]);
  });
});
