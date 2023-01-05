import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import EmailInput from './EmailInput'

describe("email input testing", () => {
    test('render email input', () => { 
        render(<EmailInput/>)
        const emailValue = screen.getByTestId("email-input");
        expect(emailValue).toBeInTheDocument();
        expect(emailValue).toHaveAttribute("type", "email");
     });

     test("pass valid email to test email input field", () => {
        render(<EmailInput />);

        const emailValue = screen.getByTestId("email-input");
        userEvent.type(emailValue, "test@gmail.com");

        expect(screen.getByTestId("email-input")).toHaveValue("test@gmail.com");
        expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
     });

     test('pass invalid email to test input value', () => { 
        render(<EmailInput />);

        const emailValue = screen.getByTestId("email-input");
        userEvent.type(emailValue, "inputTest");

        expect(screen.getByTestId("email-input")).toHaveValue("inputTest");
        expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
        expect(screen.queryByTestId("error-msg").textContent).toEqual("Please enter a valid email.");
      })


})