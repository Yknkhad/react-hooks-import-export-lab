import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../components/App";

test("it renders without crashing", () => {
  const { getByText } = render(<App />);

  expect(getByText("I'm a link!")).toBeInTheDocument();
});
