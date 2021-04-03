


import React, { useEffect } from "react";
import debounce from "lodash/debounce";

const TooltipPopover = ({ children, coordsLocal, updateTooltipCoords }) => {
  const updateCoords = debounce(updateTooltipCoords, 100);

  useEffect(() => {
    window.addEventListener("resize", updateCoords);
    return () => window.removeEventListener("resize", updateCoords);
  }, []);

  return (
    <div
      style={{ ...styles.popover, ...coordsLocal }}
    >
        <div  >
          <div>
            <div></div>
            <div>{children}</div>
          </div>
        </div>
      </div>
  );
};

const styles = {
  popover: {
    position: "absolute",
    width: 400,
    height: 130,
    transform: "translate(-390px, -210%)"
  }
};

export default TooltipPopover;
