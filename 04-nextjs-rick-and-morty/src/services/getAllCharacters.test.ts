import { test, expectTypeOf } from "vitest";
import { getAllCharacters } from "./getAllCharacters";
import { waitFor } from "@testing-library/react";
import { Character } from "@/types/Character";

test("expect getCharacters to return a list of Characters", async () => {
  const res = await waitFor(() => getAllCharacters());
  expectTypeOf(res).toMatchTypeOf<Character[]>();
});
