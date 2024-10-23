import React from "react";
import { Typography } from "../components/styleguide/Typography";
import { Colors } from "../components/styleguide/Colors";
import { Buttons } from "../components/styleguide/Buttons";

export default function StyleGuide() {
  return (
    <div className="p-8">
      <h1 className="text-6xl font-bold mb-4 ephesis-regular">Style Guide</h1>
      <Typography />
      <Colors />
      <Buttons />
    </div>
  );
}
