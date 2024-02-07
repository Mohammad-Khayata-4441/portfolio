import { DependencyList, useLayoutEffect } from "react";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'




export const useGsap = (animationFunc: (gsap: GSAP) => void,deps:DependencyList) => {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.defaults(()=>({
            scrollTrigger:{
                trigger:()=>{}
            }
        }))
        let ctx = gsap.context(() => {
            animationFunc(gsap);
        });
        return () => ctx.revert(); // <-- CLEANUP!

    }, deps)

}