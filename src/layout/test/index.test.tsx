import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Logo", () => {
  test("Logo dimension", () => {
    render(<Header />);
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("width", "45");
  });

  test("Logo attributes", () => {
    render(<Header />);
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("alt");
    expect(logo).toHaveAttribute("src", "logo.png");
  });
});
