import { render, screen } from "@testing-library/react";
import Summary from "./Summary";

const setup = () =>
  render(
    <Summary
      summaryData={[
        { away: "Brazil", awayScore: 0, home: "Spain", homeScore: 0 },
      ]}
    />
  );
test("renders Summary component", () => {
  setup();
  expect(screen.getByText("Summary data by total score")).toBeInTheDocument();
});
