import { renderHook } from "@testing-library/react";
import { useScrollPosition } from "../useScrollPosition";

describe("useScrollPosition", () => {
  it("returns initial scroll position", () => {
    const { result } = renderHook(() => useScrollPosition());
    expect(result.current).toBe(0);
  });
});