import { render, screen, fireEvent } from "@testing-library/react";
import ActionsBar from "./ActionsBar";

const mockCallback = jest.fn();
const setup = () =>
  render(
    <ActionsBar actions={[{ text: "Start game", callback: mockCallback }]} />
  );
test("renders ActionsBar component", () => {
  setup();
  expect(screen.getByText("Start game")).toBeInTheDocument();
});
test("should execute callback function after click", () => {
  setup();
  fireEvent(
    screen.getByText("Start game"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(mockCallback.mock.calls).toHaveLength(1);
});
