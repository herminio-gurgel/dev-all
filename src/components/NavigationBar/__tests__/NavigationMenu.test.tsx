import { render } from "@testing-library/react";
import NavigationMenu from "../partials/NavigationMenu";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import React from "react";

describe("NavigationMenu", () => {
  const mockToggleMenu = jest.fn();
  const renderWithRouter = (ui: React.ReactElement) =>
    render(<MemoryRouter>{ui}</MemoryRouter>);

  it("renders without crashing", () => {
    const { container } = renderWithRouter(
      <NavigationMenu menuActive={false} toggleMenu={mockToggleMenu} />,
    );
    expect(container).toBeInTheDocument();
  });

  it("applies 'is-active' class when menuActive is true", () => {
    const { container } = renderWithRouter(
      <NavigationMenu menuActive={true} toggleMenu={mockToggleMenu} />,
    );
    const navbarMenu = container.querySelector(".navbar-menu");
    expect(navbarMenu).toHaveClass("is-active");
  });

  it("does not apply 'is-active' class when menuActive is false", () => {
    const { container } = renderWithRouter(
      <NavigationMenu menuActive={false} toggleMenu={mockToggleMenu} />,
    );
    const navbarMenu = container.querySelector(".navbar-menu");
    expect(navbarMenu).not.toHaveClass("is-active");
  });

  it("closes the menu when the user clicks outside the menu", async () => {
    renderWithRouter(
      <NavigationMenu menuActive={true} toggleMenu={mockToggleMenu} />,
    );
    const outsideClick = document.createElement("div");
    outsideClick.textContent = "Click outside";
    document.body.appendChild(outsideClick);
    await userEvent.click(outsideClick);
    expect(mockToggleMenu).toHaveBeenCalledTimes(1);
  });
});
