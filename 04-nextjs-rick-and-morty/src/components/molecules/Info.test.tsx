import { test, expect, vi } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";
import { Info } from "./Info";
import { TestCharacter } from "@/types/Character";

const mockToggleFavorite = vi.fn();

test("render card info correctly", () => {
  render(
    <Info
      character={TestCharacter}
      isFavorite={false}
      toggleFavorite={mockToggleFavorite}
      // eslint-disable-next-line prettier/prettier
    />
  );
  expect(screen.getByText(TestCharacter.name)).toBeInTheDocument();
  expect(
    // eslint-disable-next-line prettier/prettier
    screen.getByText(`${TestCharacter.status} - ${TestCharacter.species}`)
  ).toBeInTheDocument();
  expect(
    // eslint-disable-next-line prettier/prettier
    screen.getByText(`Location: ${TestCharacter.location.name}`)
  ).toBeInTheDocument();
});

test("render star button correctly when not favorite", () => {
  render(
    <Info
      character={TestCharacter}
      isFavorite={false}
      toggleFavorite={mockToggleFavorite}
      // eslint-disable-next-line prettier/prettier
    />
  );
  expect(screen.getByTestId("star-empty")).toBeDefined();
});

test("render star button correctly when favorite", () => {
  render(
    <Info
      character={TestCharacter}
      isFavorite={true}
      toggleFavorite={mockToggleFavorite}
      // eslint-disable-next-line prettier/prettier
    />
  );
  expect(screen.getByTestId("star-full")).toBeDefined();
});

test("call toggleFavorite function on button click", () => {
  render(
    <Info
      character={TestCharacter}
      isFavorite={true}
      toggleFavorite={mockToggleFavorite}
      // eslint-disable-next-line prettier/prettier
    />
  );
  fireEvent.click(screen.getByRole("button"));
  expect(mockToggleFavorite).toBeCalledWith(TestCharacter, true);
});
