import { PasswordInput } from "@/components/common/input";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, describe, test } from "vitest";

describe("PasswordInput", () => {
  test("should hide password on default", () => {
    // Test goes here
    render(<PasswordInput placeholder="password" name="password" />);
    expect(screen.getByPlaceholderText("password")).toHaveAttribute(
      "type",
      "password"
    );
  });

  test("should show password when show password is clicked", async () => {
    const user = userEvent.setup();
    // Test goes here
    render(<PasswordInput placeholder="password" name="password" />);
    const showPassword = screen.getByText(/Show/i);
    await user.click(showPassword);
    expect(screen.getByPlaceholderText("password")).toHaveAttribute(
      "type",
      "text"
    );
  });
});
