import React from "react";
import { storiesOf } from "@storybook/react";
import SentFeedback from "../src/components/SentFeedback";

storiesOf("Sent feedback")
  .add("Loader", () => <SentFeedback />)
  .add("Success", () => <SentFeedback success />)
  .add("Error", () => <SentFeedback error />);
