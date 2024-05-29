import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PasswordInput } from "./PasswordInput";

test("renders the password input with the correct attributes", () => {
  const name = "password";
  const placeholder = "Enter your password";

  render(<PasswordInput name={name} placeholder={placeholder} />);

  const inputElement = screen.getByPlaceholderText(placeholder);
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("name", name);
  expect(inputElement).toHaveAttribute("id", name);
  expect(inputElement).toHaveAttribute("placeholder", placeholder);
  expect(inputElement).toHaveAttribute("type", "password");
  expect(inputElement).toBeRequired();
});

test("applies the correct classes", () => {
  const name = "password";
  const placeholder = "Enter your password";

  render(<PasswordInput name={name} placeholder={placeholder} />);

  const inputElement = screen.getByPlaceholderText(placeholder);
  expect(inputElement).toHaveClass("border border-gray-300 px-2");
});
