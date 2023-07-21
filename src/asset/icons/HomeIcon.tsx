import React from "react";
import { IIcon } from "./type";

const HomeIcon = (props: IIcon) => {
  const color = props.color || "#5f5f5f";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 256 256">
      <g fill={color} strokeMiterlimit="10" strokeWidth="1">
        <path
          d="M75.847 85.108H14.153a3 3 0 01-3-3V41.183a3 3 0 116 0v37.925h55.693V41.183a3 3 0 116 0v40.925a2.998 2.998 0 01-2.999 3z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"></path>
        <path
          d="M86.497 39.099c-.58 0-1.167-.168-1.684-.52L45 11.52 5.187 38.58a2.997 2.997 0 01-4.167-.794 2.999 2.999 0 01.794-4.167l41.5-28.207a3 3 0 013.373 0l41.5 28.207a3 3 0 01-1.69 5.48zM75.847 19.197a3 3 0 01-3-3v-4.812h-7.626a3 3 0 110-6h10.626a3 3 0 013 3v7.812a3 3 0 01-3 3zM57.991 74.831a3 3 0 01-3-3V47.8H35.009v24.031a3 3 0 11-6 0V44.8a3 3 0 013-3h25.982a3 3 0 013 3v27.031a3 3 0 01-3 3z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"></path>
      </g>
    </svg>
  );
};
export default HomeIcon;
