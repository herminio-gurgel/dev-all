import NavigationBrand from "../partials/NavigationBrand";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import React from "react";

describe("NavigationBrand", () => {
  const mockToggleMenu = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderWithRouter = (ui: React.ReactElement) =>
    render(<MemoryRouter>{ui}</MemoryRouter>);

  it("toggles the menu when burger icon is clicked", async () => {
    renderWithRouter(
      <NavigationBrand menuActive={false} toggleMenu={mockToggleMenu} />,
    );
    const burgerIcon = screen.getByRole("button", { name: "menu" });

    await userEvent.click(burgerIcon);

    expect(mockToggleMenu).toHaveBeenCalledTimes(1);
  });

  it("applies 'is-active' class when menu is active", () => {
    renderWithRouter(
      <NavigationBrand menuActive={true} toggleMenu={mockToggleMenu} />,
    );
    const burgerIcon = screen.getByRole("button", { name: "menu" });

    expect(burgerIcon).toHaveClass("is-active");
  });
});
