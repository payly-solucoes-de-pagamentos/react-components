import React from "react";
import { storiesOf } from "@storybook/react";

import HorizontalLoader from "../src/components/HorizontalLoader";

storiesOf("HorizontalLoader")
  .add("Default", () => <HorizontalLoader />)
  .add("With height 3px", () => <HorizontalLoader height="3px" />);
