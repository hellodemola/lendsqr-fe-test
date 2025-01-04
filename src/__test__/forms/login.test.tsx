import { LoginForm } from "@/components/forms";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    pathname: "/", // Mocked current route
  }),
}));

describe("Login form", () => {
  test("button should be disabled until all required fields are filled", () => {
    render(<LoginForm />);
    const button = screen.getByRole("button", { name: /log in/i });
    expect(button).toBeDisabled();
  });

  test("button should be not disabled when all required fields are filled", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    const button = screen.getByRole("button", { name: /log in/i });
    const email = screen.getByPlaceholderText(/email/i);
    const password = screen.getByPlaceholderText(/password/i);

    await user.type(email, "test@email.com");
    await user.type(password, "password");

    expect(button).not.toBeDisabled();
    await user.click(button);
  });
});
