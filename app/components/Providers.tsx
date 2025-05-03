"use client";
import React, { PropsWithChildren, useLayoutEffect } from "react";
export default function Providers(props: PropsWithChildren) {
  return (
    <>
      {/* <StyledComponentsRegistry > */}
      {props.children}
      {/* </StyledComponentsRegistry> */}
    </>
  );
}
