import { test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { TestCharacter } from "@/types/Character";
import DetailCard from "./DetailCard";

test("render card detail info", () => {
  render(<DetailCard character={TestCharacter} />);
  expect(screen.getByTestId("character-detail")).toBeDefined();
});

test("render card image", () => {
  render(<DetailCard character={TestCharacter} />);
  const src = decodeURIComponent(
    screen.getByRole("img").getAttribute("src") ?? "",
  );
  expect(src).toContain(TestCharacter.image);
});
