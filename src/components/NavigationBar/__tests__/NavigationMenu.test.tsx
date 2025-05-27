import { render } from "@testing-library/react";
import NavigationMenu from "../partials/NavigationMenu";
import userEvent from "@testing-library/user-event";

describe("NavigationMenu", () => {
  const mockToggleMenu = jest.fn();
  it("renders without crashing", () => {
    const { container } = render(
      <NavigationMenu menuActive={false} toggleMenu={mockToggleMenu} />,
    );
    expect(container).toBeInTheDocument();
  });

  it("applies 'is-active' class when menuActive is true", () => {
    const { container } = render(
      <NavigationMenu menuActive={true} toggleMenu={mockToggleMenu} />,
    );
    const navbarMenu = container.querySelector(".navbar-menu");
    expect(navbarMenu).toHaveClass("is-active");
  });

  it("does not apply 'is-active' class when menuActive is false", () => {
    const { container } = render(
      <NavigationMenu menuActive={false} toggleMenu={mockToggleMenu} />,
    );
    const navbarMenu = container.querySelector(".navbar-menu");
    expect(navbarMenu).not.toHaveClass("is-active");
  });

  it("closes the menu when the user clicks outside the menu", async () => {
    render(<NavigationMenu menuActive={true} toggleMenu={mockToggleMenu} />);
    const outsideClick = document.createElement("div");
    outsideClick.textContent = "Click outside";
    document.body.appendChild(outsideClick);
    await userEvent.click(outsideClick);
    expect(mockToggleMenu).toHaveBeenCalledTimes(1);
  });
});
