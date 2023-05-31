import { render, screen } from "@testing-library/react";
import Carousel from "../../carousel";
import mock from "../../../mock/data.json";

describe("Carousel component", () => {
  test("Correct column size based on props", () => {
    render(<Carousel showMaxAtATime={8} column={4} items={mock} />);
    expect(screen.getByTestId("carousel-0")).toBeInTheDocument();
    expect(screen.getByTestId("carousel-0")).toHaveClass("col-sm-3");
  });
});
