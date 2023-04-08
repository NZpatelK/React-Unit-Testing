import { render, screen } from "@testing-library/react";
import TestComponent from "./TestComponent";
import "@testing-library/jest-dom";


//This testing is to check if the text component is in the display.
test("should render text component", () => {
    render(<TestComponent/>);
    var textElem = screen.getByTestId("text");
    expect(textElem).toBeInTheDocument();
  });