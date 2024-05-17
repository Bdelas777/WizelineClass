import { test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { Text } from "./Text";

test("render as p", () => {
  render(<Text text="Ejemplo" />);
  expect(screen.getByRole("paragraph")).toBeInTheDocument();
});
