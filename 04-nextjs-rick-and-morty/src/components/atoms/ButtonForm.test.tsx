import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ButtonForm } from "./ButtonForm";

test("renders the button with the correct text", () => {
  const buttonText = "Submit";

  render(<ButtonForm text={buttonText} />);

  const buttonElement = screen.getByText(buttonText);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveAttribute("type", "submit");
});

test("applies the correct classes", () => {
  const buttonText = "Submit";

  render(<ButtonForm text={buttonText} />);

  const buttonElement = screen.getByText(buttonText);
  expect(buttonElement).toHaveClass(
    "mx-auto mt-3 w-2/3 rounded-xl bg-blue-800 px-10 py-2 text-white",
  );
});
