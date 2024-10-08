import React from "react";
export function NextArrow(props) {
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style }}
        onClick={props.onClick}
      ></div>
    </>
  );
}
export function PreArrow(props) {
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style }}
        onClick={props.onClick}
      ></div>
    </>
  );
}