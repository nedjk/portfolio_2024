const __vite__fileDeps=["assets/TwinkleUpdater-CUkBen9e.js","assets/OptionsColor-OZo9Vai9.js","assets/index-v3hpYkwK.js","assets/index-BQ6BeaxI.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as r}from"./index-v3hpYkwK.js";async function n(t,a=!0){await t.addParticleUpdater("twinkle",async()=>{const{TwinkleUpdater:e}=await r(()=>import("./TwinkleUpdater-CUkBen9e.js"),__vite__mapDeps([0,1,2,3]));return new e},a)}export{n as loadTwinkleUpdater};