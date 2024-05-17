import { test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { Title } from "./Title";

test("render as h3", () => {
  render(<Title title="Título" />);
  expect(screen.getByRole("heading")).toBeInTheDocument();
});
