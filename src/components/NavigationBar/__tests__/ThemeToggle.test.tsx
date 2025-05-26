import { render } from "@testing-library/react";
import ThemeToggle from "../partials/ThemeToggle";
import { userEvent } from "@testing-library/user-event";

describe("ThemeToggle Component", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.setAttribute("data-theme", "dark");
  });

  describe("Basic Rendering", () => {
    it("renders without crashing", () => {
      const { container } = render(<ThemeToggle />);
      expect(container).toBeInTheDocument();
    });

    it("initializes with the correct theme from localStorage", () => {
      const { getByRole } = render(<ThemeToggle />);
      const button = getByRole("button");

      expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
      const icon = button.querySelector(".icon");
      expect(icon).toHaveClass("fa-moon");
    });

    it("initializes with the correct theme from document attribute", () => {
      document.documentElement.setAttribute("data-theme", "light");
      const { getByRole } = render(<ThemeToggle />);
      const button = getByRole("button");

      expect(document.documentElement.getAttribute("data-theme")).toBe("light");
      const icon = button.querySelector(".icon");
      expect(icon).toHaveClass("fa-sun");
    });
  });

  describe("User Interaction", () => {
    it("toggles theme on button click", async () => {
      const { getByRole } = render(<ThemeToggle />);
      const button = getByRole("button");

      await userEvent.click(button);
      expect(document.documentElement.getAttribute("data-theme")).toBe("light");

      await userEvent.click(button);
      expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    });

    it("updates localStorage on theme toggle", async () => {
      const { getByRole } = render(<ThemeToggle />);
      const button = getByRole("button");

      await userEvent.click(button);
      expect(localStorage.getItem("dev/all-theme")).toBe("light");

      await userEvent.click(button);
      expect(localStorage.getItem("dev/all-theme")).toBe("dark");
    });

    it("applies correct hover style based on theme", async () => {
      const { getByRole } = render(<ThemeToggle />);
      const button = getByRole("button");

      await userEvent.click(button);
      await userEvent.hover(button);
      expect(button).toHaveStyle("background-color: #fff7c2");

      await userEvent.click(button);
      await userEvent.hover(button);
      expect(button).toHaveStyle("background-color: #e6dbfa");
    });

    it("applies the correct icon based on theme", async () => {
      const { getByRole } = render(<ThemeToggle />);
      const button = getByRole("button");
      const icon = button.querySelector(".icon");

      expect(icon).toHaveAttribute("data-icon", "moon");

      await userEvent.click(button);
      expect(icon).toHaveAttribute("data-icon", "sun");
    });
  });
});
