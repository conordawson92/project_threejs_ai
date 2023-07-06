import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#000000", // black
          "#FFFFFF", // white
          "#FF0000", // red
          "#00FF00", // green
          "#0000FF", // blue
          "#FFFF00", // yellow
          "#FF00FF", // magenta
          "#FFA500", // orange
          "#800080", // purple
          "#008080", // teal
          "#808080", // gray
          "#FFC0CB", // pink
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
