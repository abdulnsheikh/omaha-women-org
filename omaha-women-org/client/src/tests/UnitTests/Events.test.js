import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Events from "../../routes/events";

describe("Tests for events container with no events", () => {
  test("no events are rendered", () => {
    render(
      <BrowserRouter>
        <Events />
      </BrowserRouter>
    );
    const noEventsText = screen.getByText(/No events found!/i);
    expect(noEventsText).toBeInTheDocument();
  });
});
