import { render, screen } from "@testing-library/react";
import Match from "./Match";

const setup = () =>
  render(<Match home={"Spain"} away={"Brazil"} homeScore={0} awayScore={0} />);

test("renders match component", () => {
  setup();
  expect(screen.getAllByText("0")).toHaveLength(2);
});
