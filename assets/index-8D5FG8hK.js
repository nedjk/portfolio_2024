const __vite__fileDeps=["assets/ParallaxMover-Dg3psheM.js","assets/index-I0zFQ3J0.js","assets/index-DCiutzlE.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as t}from"./index-I0zFQ3J0.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-Dg3psheM.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};