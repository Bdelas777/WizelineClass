import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TextField } from "./TextField";

test("renders an input when 'as' is 'text'", () => {
  render(<TextField as="text" />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();
  expect(inputElement.tagName).toBe("INPUT");
  expect(inputElement).toHaveClass(
    // eslint-disable-next-line prettier/prettier
    "flex flex-col rounded-md px-2 py-1 text-zinc-900"
  );
});

test("renders a textarea when 'as' is 'textarea'", () => {
  render(<TextField as="textarea" />);
  const textareaElement = screen.getByRole("textbox");
  expect(textareaElement).toBeInTheDocument();
  expect(textareaElement.tagName).toBe("TEXTAREA");
  expect(textareaElement).toHaveClass(
    // eslint-disable-next-line prettier/prettier
    "flex flex-col rounded-md px-2 py-1 text-zinc-900"
  );
});

test("applies additional class names", () => {
  render(<TextField as="text" className="extra-class" />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveClass("extra-class");
});
