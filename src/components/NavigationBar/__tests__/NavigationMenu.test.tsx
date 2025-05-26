import { render } from "@testing-library/react";
import NavigationMenu from "../partials/NavigationMenu";

describe("NavigationMenu", () => {
  it("renders without crashing", () => {
    const { container } = render(<NavigationMenu menuActive={false} />);
    expect(container).toBeInTheDocument();
  });

  it("applies 'is-active' class when menuActive is true", () => {
    const { container } = render(<NavigationMenu menuActive={true} />);
    const navbarMenu = container.querySelector(".navbar-menu");
    expect(navbarMenu).toHaveClass("is-active");
  });

  it("does not apply 'is-active' class when menuActive is false", () => {
    const { container } = render(<NavigationMenu menuActive={false} />);
    const navbarMenu = container.querySelector(".navbar-menu");
    expect(navbarMenu).not.toHaveClass("is-active");
  });
});
