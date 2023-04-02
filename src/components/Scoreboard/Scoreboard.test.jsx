import { render, screen } from "@testing-library/react";
import Scoreboard from "./Scoreboard";

const setup = () => render(<Scoreboard />);
test("renders scoreboard component", () => {
  setup();
  expect(screen.getByText("Scoreboard")).toBeInTheDocument();
});
