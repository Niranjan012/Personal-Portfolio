import { cn, formatDate, truncateText, generateSlug } from "@/lib/utils";

describe("cn", () => {
  it("merges class names correctly", () => {
    expect(cn("class1", "class2")).toBe("class1 class2");
    expect(cn("class1", undefined, "class2")).toBe("class1 class2");
  });
});

describe("formatDate", () => {
  it("formats dates correctly", () => {
    const date = new Date("2023-01-01");
    expect(formatDate(date)).toBe("January 1, 2023");
  });
});

describe("truncateText", () => {
    it("truncates text when longer than max length", () => {
      expect(truncateText("Hello World", 5)).toBe("Hello...");
    });

    it("returns original text when shorter than max length", () => {
      expect(truncateText("Hi", 5)).toBe("Hi");
    });

    it("handles empty string", () => {
      expect(truncateText("", 5)).toBe("");
    });
  });

describe("generateSlug", () => {
  it("generates slugs correctly", () => {
    expect(generateSlug("Hello World!")).toBe("hello-world");
    expect(generateSlug("Test 123")).toBe("test-123");
  });
});