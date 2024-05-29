import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Message } from "./Message"; // Ajusta la ruta según sea necesario

test("renders the message with the correct text", () => {
  const messageText = "This is a message";

  render(<Message error={false} message={messageText} />);

  const messageElement = screen.getByText(messageText);
  expect(messageElement).toBeInTheDocument();
  expect(messageElement).toHaveClass("text-black");
});

test("applies the correct error class when error is true", () => {
  const messageText = "This is an error message";

  render(<Message error={true} message={messageText} />);

  const messageElement = screen.getByText(messageText);
  expect(messageElement).toBeInTheDocument();
  expect(messageElement).toHaveClass("text-red-500");
});

test("applies the correct class when error is false", () => {
  const messageText = "This is a normal message";

  render(<Message error={false} message={messageText} />);

  const messageElement = screen.getByText(messageText);
  expect(messageElement).toBeInTheDocument();
  expect(messageElement).toHaveClass("text-black");
});
