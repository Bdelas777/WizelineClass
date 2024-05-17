// Label.test.tsx
import { test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { Label } from "./Label";

test("renders label with default classes", () => {
  render(<Label htmlFor="test-input">Test Label</Label>);
  const labelElement = screen.getByText("Test Label");
  expect(labelElement).toBeInTheDocument();
  expect(labelElement).toHaveClass("flex flex-col py-1");
});

test("applies additional class names", () => {
  render(
    <Label htmlFor="test-input" className="extra-class">
      Test Label
    </Label>,
  );
  const labelElement = screen.getByText("Test Label");
  expect(labelElement).toBeInTheDocument();
  expect(labelElement).toHaveClass("extra-class");
});

test("sets the htmlFor attribute correctly", () => {
  render(<Label htmlFor="test-input">Test Label</Label>);
  const labelElement = screen.getByText("Test Label");
  expect(labelElement).toBeInTheDocument();
  expect(labelElement.getAttribute("for")).toBe("test-input");
});
