const __vite__fileDeps=["assets/ColorUpdater-Qlk8ictw.js","assets/index-I0zFQ3J0.js","assets/index-DCiutzlE.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-I0zFQ3J0.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-Qlk8ictw.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
