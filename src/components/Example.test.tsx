import React from "react";
import { create } from "react-test-renderer";

import Example from "./Example";

it("renders correctly", () => {
  const component = create(<Example />);

  expect(component).toMatchSnapshot();
});
