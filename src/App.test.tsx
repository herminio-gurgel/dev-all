import { render, screen } from "@testing-library/react";
import App from "./App";

it("should render default template heading", function () {
  render(<App />);
  const heading = screen.getByText("Vite + React");
  expect(heading).toBeInTheDocument();
});
