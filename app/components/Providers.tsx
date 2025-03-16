"use client";
import React, { PropsWithChildren, useLayoutEffect } from "react";
import StyledComponentsRegistry from "./StyledRegistery";
import aos from "aos";
import "aos/dist/aos.css";
export default function Providers(props: PropsWithChildren) {
  useLayoutEffect(() => {
    aos.init();
  }, []);
  return (
    <>
      {/* <StyledComponentsRegistry > */}
      {props.children}
      {/* </StyledComponentsRegistry> */}
    </>
  );
}
