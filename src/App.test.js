import React from "react";
import { generateImage } from "jsdom-screenshot";
import { render } from "react-testing-library";
import App from "./App";

it("renders without crashing", async () => {
  // render App into jsdom
  render(<App />);

  // prevent spinner from rotating to ensure consistent screenshots
  document
    .getElementsByClassName("App-logo")[0]
    .setAttribute("style", "animation: none");

  // Take screenshot with generateImage()
  const screenshot = await generateImage();
  // and compare it to the previous sceenshot with toMatchImageSnapshot()
  expect(screenshot).toMatchImageSnapshot();
});
