import NavigationBrand from "../partials/NavigationBrand";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("NavigationBrand", () => {
  const mockToogleMenu = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("toggles the menu when burger icon is clicked", async () => {
    render(<NavigationBrand menuActive={false} toggleMenu={mockToogleMenu} />);
    const burgerIcon = screen.getByRole("button", { name: "menu" });

    await userEvent.click(burgerIcon);

    expect(mockToogleMenu).toHaveBeenCalledTimes(1);
  });

  it("applies 'is-active' class when menu is active", () => {
    render(<NavigationBrand menuActive={true} toggleMenu={mockToogleMenu} />);
    const burgerIcon = screen.getByRole("button", { name: "menu" });

    expect(burgerIcon).toHaveClass("is-active");
  });
});
