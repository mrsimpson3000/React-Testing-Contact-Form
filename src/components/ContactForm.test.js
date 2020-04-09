import React from "react";
import { render, fireEvent, userEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("inputs are visible", () => {
  // ARRANGE - set up the testing environment
  const { getByTestId } = render(<ContactForm />);

  // ACT -no action

  // ASSERT
  getByTestId("fname");
  getByTestId("lname");
  getByTestId("email");
  getByTestId("message");
});

test("Submit filled out form", () => {
  const { getByTestId } = render(<ContactForm />);
  // ARRANGE -set up the testing environment
  const fnameInput = getByTestId("fname");
  const lnameInput = getByTestId("lname");
  const emailInput = getByTestId("email");
  const messageInput = getByTestId("message");

  // ACT
  fireEvent.change(fnameInput, { target: { value: "Chadwick" } });
  fireEvent.change(lnameInput, { target: { value: "Simpson" } });
  fireEvent.change(emailInput, { target: { value: "mrsimpson3000@gmail" } });
  fireEvent.change(messageInput, {
    target: { value: "I am here and you are not here." },
  });

  // ASSERT
  expect(fnameInput.value).toBe("Chadwick");
  expect(lnameInput).toBe("Simpson");
  expect(emailInput).toBe("mrsimpson3000@gmail.com");
  expect(messageInput).toBe("I am here and you are not here.");
});
