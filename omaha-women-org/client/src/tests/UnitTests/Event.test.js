import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Event from "../../Components/Event";

describe("Event Component", () => {
  test("renders Event component without required props", () => {
    const { container } = render(<Event />);

    // fails
    expect(container.firstChild).toBeNull();
  });

  test("renders Event component successfully", () => {
    const event = {
      Event_Description:
        "OIWC cultural event desciprtion Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      Event_END: "Thu Apr 23 2022 10:00:00 GMT-0500 (Central Daylight Time)",
      Event_Id: 1,
      Event_ImgURL: null,
      Event_IsActive: 1,
      Event_Location: "OIWC Community Hall",
      Event_Organizer_Id: 2,
      Event_Start: "Thu Apr 22 2022 10:00:00 GMT-0500 (Central Daylight Time)",
      Event_Title: "Cultural Event",
    };
    render(
      <BrowserRouter>
        <Event event={event} />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/OIWC Community Hall/i);
    expect(linkElement).toBeInTheDocument();
  });
});
