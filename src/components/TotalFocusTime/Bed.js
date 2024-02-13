import React from "react";
import {Text} from "@chakra-ui/react";

const Bed = React.forwardRef(({ formattedTime, ...props }, ref) => {
  return (
    <div style={{ position: "fixed", bottom: 0, right: 80, zIndex: 1 }}>
        <div>
          <button ref={ref} {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="120%" height="100%" viewBox="0 0 373 120" fill="none">
              <g filter="url(#filter0_d_83_87)">
                <path d="M4 56C4 25.0721 29.0721 0 60 0H313C343.928 0 369 25.0721 369 56V56C369 86.9279 343.928 112 313 112H60C29.0721 112 4 86.9279 4 56V56Z" fill="currentColor" />
              </g>
              <defs>
                <filter
                  id="filter0_d_83_87"
                  x="0"
                  y="0"
                  width="373"
                  height="120"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_83_87" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_83_87" result="shape" />
                </filter>
              </defs>
            </svg>
            <Text variant="totalTime" position="absolute" bottom="27px" right="30px">
              Σ {formattedTime}
            </Text>
          </button>
        </div>
    </div>
  );
});

export default Bed;
