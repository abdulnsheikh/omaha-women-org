import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App"

describe("Tests for Logged in User", () => {

  beforeAll(() => {
    sessionStorage.setItem("isAuthenticated", true);
    sessionStorage.setItem("user", {
        User_Address: "omaha",
        User_Age: null,
        User_Email: "gopinath.gangisetti@gmail.com",
        User_First: "Gopinath",
        User_Id: 2,
        User_Last: "Gangisetti",
        User_Phone: "531-111-1111",
        User_Role: "Admin"
    })
  })
  
  afterAll(() => {
    sessionStorage.clear();
  })

  const { getByTestId} = render(
    <App />
   );
   const navs = getByTestId("navbar-children");

  test("Match children length of navbar", () => {
    expect(navs.children.length).toBe(4);
  });

});