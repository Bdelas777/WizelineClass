import { test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import Footer from "./Footer";

test("render footer correctly", async () => {
  render(<Footer />);

  const aboutLink = await screen.findByText("About");
  const apiLink = await screen.findByText("Rick and Morty API");

  expect(aboutLink).toBeInTheDocument();
  expect(apiLink).toBeInTheDocument();

  expect(apiLink).toHaveAttribute("href", "https://rickandmortyapi.com/");
  expect(apiLink).toHaveAttribute("target", "_blank");
  expect(apiLink).toHaveAttribute("rel", "noreferrer");
});
