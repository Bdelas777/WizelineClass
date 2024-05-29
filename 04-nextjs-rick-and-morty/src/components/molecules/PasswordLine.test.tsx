import { test, expect } from "vitest";
import { PasswordLine } from "./PasswordLine";
import { render, screen } from "@testing-library/react";

test("renders label and PasswordInput with correct props", () => {
  const title = "Password";
  const name = "password";
  const placeholder = "Enter your password";

  render(<PasswordLine title={title} name={name} placeholder={placeholder} />);

  const labelElement = screen.getByText(title);
  expect(labelElement).toBeTruthy();

  const passwordInputElement = screen.getByPlaceholderText(placeholder);
  expect(passwordInputElement).toBeTruthy();
  expect(passwordInputElement).toHaveAttribute("name", name);
  expect(passwordInputElement).toHaveAttribute("placeholder", placeholder);
});
