import { render, screen } from "@testing-library/react";
import Score from "./Score";

const setup = () => render(<Score home={0} away={0} />);
test("renders score component", () => {
  setup();
  expect(screen.getAllByText(0)).toHaveLength(2);
});
