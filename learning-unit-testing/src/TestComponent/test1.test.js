import { render, screen } from "@testing-library/react";
import TestComponent from "./TestComponent";
import "@testing-library/jest-dom";

test("should render text component", () => {
    render(<TestComponent/>);
    var textElem = screen.getByTestId("text");
    expect(textElem).toBeInTheDocument();
  });