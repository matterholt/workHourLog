import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";


test("renders learn react link", () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/Weekly Hour Log/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders the total hours for the we week", () => {
    const { getByText } = render(<Header hoursWorkedWeek = {0}/>);
      const linkElement = getByText(/test/i);
    expect(linkElement).toBeInTheDocument();
    screen.debug()
})