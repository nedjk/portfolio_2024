const __vite__fileDeps=["assets/WobbleUpdater-8B51Sqt9.js","assets/index-v3hpYkwK.js","assets/index-BQ6BeaxI.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-v3hpYkwK.js";async function i(t,a=!0){await t.addParticleUpdater("wobble",async e=>{const{WobbleUpdater:r}=await o(()=>import("./WobbleUpdater-8B51Sqt9.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadWobbleUpdater};