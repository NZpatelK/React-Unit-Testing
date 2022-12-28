import { render, screen, cleanup } from "@testing-library/react";
import Text from "./TestComponent";
import "@testing-library/jest-dom";

test("should render text component", () => {
    render(<Text />);
    var textElem = screen.getByTestId("text");
    expect(textElem).toBeInTheDocument();
  });