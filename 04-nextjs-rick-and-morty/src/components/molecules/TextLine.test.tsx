import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TextLine } from "./TextLine";

test("renders label and input with correct props", () => {
  const title = "Username";
  const name = "username";
  const placeholder = "Enter your username";

  render(<TextLine title={title} name={name} placeholder={placeholder} />);

  const labelElement = screen.getByText(title);
  expect(labelElement).toBeInTheDocument();

  const inputElement = screen.getByPlaceholderText(placeholder);
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("name", name);
  expect(inputElement).toHaveAttribute("placeholder", placeholder);
});
