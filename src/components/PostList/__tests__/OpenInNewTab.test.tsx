import OpenInNewTab from "../partials/OpenInNewTab";
import { render } from "@testing-library/react";

describe("OpenInNewTab", () => {
  const originalOpen = window.open;
  beforeEach(() => {
    window.open = jest.fn();
  });
  afterEach(() => {
    window.open = originalOpen;
    jest.clearAllMocks();
  });

  it("renders the button and icon", () => {
    const { getByRole } = render(
      <OpenInNewTab isLoading={false} postID={123} />,
    );
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("applies skeleton class when loading", () => {
    const { container } = render(
      <OpenInNewTab isLoading={true} postID={123} />,
    );
    const icon = container.querySelector(".is-skeleton");
    expect(icon).toBeInTheDocument();
  });

  it("does not apply skeleton class when not loading", () => {
    const { container } = render(
      <OpenInNewTab isLoading={false} postID={123} />,
    );
    const icon = container.querySelector(".is-skeleton");
    expect(icon).not.toBeInTheDocument();
  });

  it("opens the correct URL on click", () => {
    const { getByRole } = render(
      <OpenInNewTab isLoading={false} postID={123} />,
    );
    const button = getByRole("button");
    button.click();
    expect(window.open).toHaveBeenCalledWith(
      "http://localhost:3001/api/v2/post/123/click",
    );
  });
});
