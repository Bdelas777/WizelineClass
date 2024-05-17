// Form.test.tsx
import { test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { Form } from "./Form";

test("renders form with default classes", () => {
  render(<Form />);
  const formElement = screen.getByTestId("form");
  expect(formElement).toBeInTheDocument();
  expect(formElement).toHaveClass(
    "rounded-lg border-[1px] border-slate-700 px-5 py-10",
  );
});

test("applies additional class names", () => {
  render(<Form className="extra-class" />);
  const formElement = screen.getByTestId("form");
  expect(formElement).toBeInTheDocument();
  expect(formElement).toHaveClass("extra-class");
});
