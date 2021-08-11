import React from "react";
import MutationObserver from "mutationobserver-shim";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from "./Color";

const testColor = {
  color: "aliceblue",
  code: {
    hex: "#f0f8ff",
  },
  id: 1,
};

test("Renders without errors with blank color passed into component", () => {
  render(<Color color={testColor} />);
});

// test("Renders the color passed into component", () => {
//   render(<Color color={""} />);
// });

// test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
//   render(<Color color={""} />);
// });

// test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
//   render(<Color color={""} />);
// });
