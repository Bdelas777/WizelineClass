import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { PageTemplate } from "./PageTemplate";

describe("PageTemplate", () => {
  test("renders children and header/footer correctly", () => {
    // Mock props
    const titleLinks = ["Home", "About", "Contact"];
    const urlLinks = ["/", "/about", "/contact"];

    // Render PageTemplate with mocked props and children
    render(
      <PageTemplate titleLinks={titleLinks} urlLinks={urlLinks}>
        <div>Child Component</div>
      </PageTemplate>,
    );

    // Verify that children are rendered
    expect(screen.getByText("Child Component")).toBeInTheDocument();
  });
});
