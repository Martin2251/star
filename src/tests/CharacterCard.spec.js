import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import "@testing-library/jest-dom";

import CharacterCard from "../CharacterCard";

test("loads and display greeting", async () => {
  const character = {
    url: "",
    name: "Test Character",
    films: [],
  };

  render(
    <Router>
      <CharacterCard character={character} />
    </Router>
  );

  expect(screen.getByText("Test Character")).toBeVisible();
});
