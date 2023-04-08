import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import EmailInput from './EmailInput';

describe("email input testing", () => {
   //This unit test is to test the input field is dsiplay on the screen.
   //Also test the attribute type should be email type.
    test('render email input', () => { 
        render(<EmailInput/>)
        const emailValue = screen.getByTestId("email-input");
        expect(emailValue).toBeInTheDocument();
        expect(emailValue).toHaveAttribute("type", "email");
     });

     //This testing is to test the valid the email input is match email format.
     test("pass valid email to test email input field", () => {
        render(<EmailInput />);

        const emailValue = screen.getByTestId("email-input");
        userEvent.type(emailValue, "test@gmail.com");

        expect(screen.getByTestId("email-input")).toHaveValue("test@gmail.com");
        expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
     });

     //This testing is to test the invalid the email input is not match email format.
     test('pass invalid email to test input value', () => { 
        render(<EmailInput />);

        const emailValue = screen.getByTestId("email-input");
        userEvent.type(emailValue, "inputTest");

        expect(screen.getByTestId("email-input")).toHaveValue("inputTest");
        expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
        expect(screen.queryByTestId("error-msg").textContent).toEqual("Please enter a valid email.");
      })


})