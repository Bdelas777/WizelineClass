import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

test("renders the input with the correct attributes", () => {
  const name = "username";
  const placeholder = "Enter your username";

  render(<Input name={name} placeholder={placeholder} />);

  const inputElement = screen.getByPlaceholderText(placeholder);
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("name", name);
  expect(inputElement).toHaveAttribute("id", name);
  expect(inputElement).toHaveAttribute("placeholder", placeholder);
  expect(inputElement).toBeRequired();
});

test("applies the correct classes", () => {
  const name = "username";
  const placeholder = "Enter your username";

  render(<Input name={name} placeholder={placeholder} />);

  const inputElement = screen.getByPlaceholderText(placeholder);
  expect(inputElement).toHaveClass("border border-gray-300 px-2");
});
