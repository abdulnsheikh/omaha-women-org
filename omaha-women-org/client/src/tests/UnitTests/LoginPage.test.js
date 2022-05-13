import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App.js"

describe("Tests for Login Page", () => {
  test("Match snapshot of LoginPage", () => {
    const { loginContainer } = render(
        <App />
    );
    expect(loginContainer).toMatchSnapshot();
  });
});
