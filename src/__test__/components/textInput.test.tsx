import { TextInput } from "@/components/common/input";
import { render } from "@testing-library/react";
import { describe, test } from "vitest";

describe("textInput", () => {
  test("should render text input", () => {
    render(<TextInput type="email" placeholder="email" name="email" />);
  });
});
