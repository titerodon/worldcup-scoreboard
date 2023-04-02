import { render, screen } from "@testing-library/react";
import Flag from "./Flag";

const setup = () => render(<Flag country={"Spain"} />);
test("renders Flag component", () => {
  setup();
  const flag = screen.getByAltText("es");
  expect(flag).toHaveAttribute("src", "/assets/images/es.svg");
});
