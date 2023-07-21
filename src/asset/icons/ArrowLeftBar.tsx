import React from "react";
import { IIcon } from "./type";

type CollapIcon = IIcon & {
  onClick?: () => void;
};

const BellIcon = (props: CollapIcon) => {
  const color = props.color || "#1677ff";
  return (
    <svg
      onClick={() => {
        props.onClick?.();
      }}
      style={{ right: 10, position: "absolute", top: 19 }}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 256 256">
      <path
        fill="#037de2"
        strokeMiterlimit="10"
        strokeWidth="1"
        d="M20.48 45L59.75 90 69.52 81.48 37.69 45 69.52 8.52 59.75 0z"
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"></path>
    </svg>
  );
};
export default BellIcon;
