const __vite__fileDeps=["assets/EmittersSquareShapeGenerator-C_0BdUZz.js","assets/EmitterShapeBase-4KcS34Iy.js","assets/index-C9_eWPxX.js","assets/index-JAAk9KWO.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-C9_eWPxX.js";async function p(a,t=!0){var r;const e=a,{EmittersSquareShapeGenerator:o}=await i(()=>import("./EmittersSquareShapeGenerator-C_0BdUZz.js"),__vite__mapDeps([0,1,2,3]));(r=e.addEmitterShapeGenerator)==null||r.call(e,"square",new o),await e.refresh(t)}export{p as loadEmittersShapeSquare};