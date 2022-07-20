import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import file from "./app.jsx";

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM.render needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("The output variable needs to be the expected one", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="col-4 mx-auto mt-5"
>
  <h2
    className="text-center"
  >
    My Favorite Programming Languages
  </h2>
  <ul>
    <li>
      JavaScript
    </li>
    <li>
      Python
    </li>
    <li>
      Java
    </li>
    <li>
      C++
    </li>
  </ul>
</div>
`);
});