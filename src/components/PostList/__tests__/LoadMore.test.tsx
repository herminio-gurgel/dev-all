import LoadMore from "../partials/LoadMore";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("LoadMore", () => {
  it("should render the LoadMore button", () => {
    render(
      <LoadMore
        isLoading={false}
        hasMore={true}
        onClick={jest.fn()}
        noResults={false}
        error={false}
      />,
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should call the onClick handler when clicked", async () => {
    const handleClick = jest.fn();
    render(
      <LoadMore
        isLoading={false}
        hasMore={true}
        onClick={() => {
          handleClick();
          return void 0;
        }}
        noResults={false}
        error={false}
      />,
    );
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should not call the onClick handler when loading", async () => {
    const handleClick = jest.fn();
    render(
      <LoadMore
        isLoading={true}
        hasMore={true}
        onClick={() => {
          handleClick();
          return void 0;
        }}
        noResults={false}
        error={false}
      />,
    );
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it("should not render the button when hasMore is false", () => {
    render(
      <LoadMore
        isLoading={false}
        hasMore={false}
        onClick={jest.fn()}
        noResults={false}
        error={false}
      />,
    );
    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
