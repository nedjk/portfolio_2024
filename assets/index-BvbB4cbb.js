const __vite__fileDeps=["assets/EmittersCircleShapeGenerator-DN3I1bu4.js","assets/EmitterShapeBase-4KcS34Iy.js","assets/index-BRCUBVKh.js","assets/index-Dze6MxYj.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-BRCUBVKh.js";async function c(t,a=!0){var r;const e=t,{EmittersCircleShapeGenerator:i}=await o(()=>import("./EmittersCircleShapeGenerator-DN3I1bu4.js"),__vite__mapDeps([0,1,2,3]));(r=e.addEmitterShapeGenerator)==null||r.call(e,"circle",new i),await e.refresh(a)}export{c as loadEmittersShapeCircle};