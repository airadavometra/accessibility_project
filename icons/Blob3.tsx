import { WithClassName } from "@/types/common";
import { FC } from "react";

export const Blob3: FC<WithClassName> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#000000"
        d="M47.6,-73.9C60.2,-65.9,67.9,-50.2,73.3,-34.6C78.8,-18.9,81.9,-3.4,81.1,12.6C80.3,28.6,75.5,44.9,66,58.9C56.5,72.8,42.3,84.2,26.4,87.9C10.6,91.6,-6.9,87.4,-21.5,80C-36,72.6,-47.5,61.9,-59.2,50.2C-70.9,38.6,-82.8,26.1,-87,11.2C-91.1,-3.7,-87.5,-21,-79.9,-36.1C-72.4,-51.2,-61,-64.2,-47,-71.5C-33,-78.8,-16.5,-80.5,0.5,-81.2C17.5,-82,35,-81.8,47.6,-73.9Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};
