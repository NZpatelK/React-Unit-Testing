import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ButtonTesting from "./ButtonTesting";

test("button should be dsiabled", () => {
    render(<ButtonTesting />);
    const buttonElem = screen.getByTestId("buttonValue");
    expect(buttonElem).not.toHaveAttribute('disabled')
    expect(buttonElem).not.toBeDisabled();
})