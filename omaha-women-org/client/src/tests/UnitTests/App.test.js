import { render, screen } from '@testing-library/react';
import App from "../../App.js"
import Home from '../../routes/Home';

describe("Tests for Home Page", () => {
  test("Match snapshot of Home page", () => {
    const { loginContainer } = render(
        <Home />
    );
    expect(loginContainer).toMatchSnapshot();
  });
});


describe("Tests for Guest User", () => {

  const { getByTestId} = render(
    <App />
   );
   const navs = getByTestId("navbar-children");

  test("Match children length of navbar", () => {
    expect(navs.children.length).toBe(4);
  });

});