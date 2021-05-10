import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders", () => {
  render(<App />);
  const text = screen.getByText(/react-query/i);
  expect(text).toBeInTheDocument();
});
