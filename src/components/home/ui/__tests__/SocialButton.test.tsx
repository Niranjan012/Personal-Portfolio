import { render, screen } from "@testing-library/react";
import SocialButton from "../ui/SocialButton";

describe("SocialButton", () => {
  it("renders with text and icon", () => {
    render(
      <SocialButton
        text="GitHub"
        icon="github-icon"
        url="https://github.com"
      />
    );
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "https://github.com");
  });

  it("has minimum touch target", () => {
    render(
      <SocialButton
        text="GitHub"
        icon="github-icon"
        url="https://github.com"
      />
    );
    const link = screen.getByRole("link");
    expect(link).toHaveClass("min-h-[44px]");
  });
});