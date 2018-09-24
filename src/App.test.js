import React from "react";
import ReactDOM from "react-dom";
import { generateImage } from "jsdom-screenshot";
import App from "./App";

it("renders without crashing", async () => {
  // render App into jsdom
  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(<App />, div);

  // prevent spinner from rotating to ensure consistent screenshots
  document
    .getElementsByClassName("App-logo")[0]
    .setAttribute("style", "animation: none");

  // Take screenshot with generateImage()
  const screenshot = await generateImage();
  // and compare it to the previous sceenshot with toMatchImageSnapshot()
  expect(screenshot).toMatchImageSnapshot();

  // clean up for next test
  ReactDOM.unmountComponentAtNode(div);
  document.body.removeChild(div);
});
