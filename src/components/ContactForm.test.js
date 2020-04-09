import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("inputs are visible", () => {
  // ARRANGE - set up the testing environment
  const { getByText } = render(<ContactForm />);

  // ACT -no action

  // ASSERT
  getByText(/first name/i);
  getByText(/last name/i);
  getByText(/email/i);
  getByText(/message/i);
});

test("Submit filled out form", () => {
  const { getByText, getByTestId } = render(<ContactForm />);
  // ARRANGE -set up the testing environment
  const fnameInput = getByText(/first name/i);
  const lnameInput = getByText(/last name/i);
  const emailInput = getByText(/email/i);
  const messageInput = getByText(/message/i);

  // ACT
  fireEvent.change(fnameInput, { target: { value: "Chadwick" } });
  fireEvent.change(lnameInput, { target: { value: "Simpson" } });
  fireEvent.change(emailInput, { target: { value: "mrsimpson3000@gmail" } });
  fireEvent.change(messageInput, {
    target: { value: "I am here and you are not here." },
  });

  // ASSERT
});
