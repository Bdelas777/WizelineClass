import { test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { TestCharacter } from "@/types/Character";
import DetailInfo from "./DetailInfo";

test("render detail info correctly", () => {
  render(<DetailInfo character={TestCharacter} />);
  expect(screen.getByText(TestCharacter.name)).toBeInTheDocument();
  expect(screen.getByText(TestCharacter.status)).toBeInTheDocument();
  expect(screen.getByText(TestCharacter.gender)).toBeInTheDocument();
  expect(screen.getByText("Species:")).toBeInTheDocument();
  expect(screen.getByText(TestCharacter.species)).toBeInTheDocument();
  expect(screen.getByText("Origin:")).toBeInTheDocument();
  expect(screen.getByText(TestCharacter.origin.name)).toBeInTheDocument();
  expect(screen.getByText("Location:")).toBeInTheDocument();
  expect(screen.getByText(TestCharacter.location.name)).toBeInTheDocument();
});
