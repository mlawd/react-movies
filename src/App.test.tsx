import React from "react";
import ReactDOM from "react-dom";

import { act } from "react-dom/test-utils";
import App from "./App";

it("renders without crashing", () => {
  window.fetch = jest.fn().mockResolvedValue({
    async json() {
      console.log("calling json");
      return {
        results: [
          {
            id: 1234,
            title: "Some title"
          }
        ]
      };
    }
  });
  const div = document.createElement("div");
  act(() => {
    ReactDOM.render(<App />, div);
  });
  expect(true).toEqual(true);
});
