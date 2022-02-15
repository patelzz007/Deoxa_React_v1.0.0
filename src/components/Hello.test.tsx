import { act } from "react-dom/test-utils";
import * as ReactDOM from "react-dom";
import Hello from "./Hello";

describe("Hello", function () {
  it("should display pass in number", function () {
    const container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<Hello num={191} />, container);
    });
    const header = container.querySelector("h2");
    expect(header?.textContent).toBe("Hello world React! Num: 191");
  });
});
