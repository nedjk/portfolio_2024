const __vite__fileDeps=["assets/TwinkleUpdater-CxF9-qQ6.js","assets/OptionsColor-D9O-3pxf.js","assets/index-I0zFQ3J0.js","assets/index-DCiutzlE.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as r}from"./index-I0zFQ3J0.js";async function n(t,a=!0){await t.addParticleUpdater("twinkle",async()=>{const{TwinkleUpdater:e}=await r(()=>import("./TwinkleUpdater-CxF9-qQ6.js"),__vite__mapDeps([0,1,2,3]));return new e},a)}export{n as loadTwinkleUpdater};