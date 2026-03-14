import { render, screen } from "@testing-library/react";
import Section4 from "../Section4";

describe("Section4", () => {
  it("renders with correct heading", () => {
    render(<Section4 id="skills" />);
    expect(screen.getByText("Skills")).toBeInTheDocument();
  });
});