const __vite__fileDeps=["assets/Slower-Cmp6r1eh.js","assets/ExternalInteractorBase-CIi3zRdK.js","assets/index-I0zFQ3J0.js","assets/index-DCiutzlE.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-I0zFQ3J0.js";class a{constructor(){this.factor=3,this.radius=200}load(r){r&&(r.factor!==void 0&&(this.factor=r.factor),r.radius!==void 0&&(this.radius=r.radius))}}async function s(t,r=!0){await t.addInteractor("externalSlow",async o=>{const{Slower:i}=await e(()=>import("./Slower-Cmp6r1eh.js"),__vite__mapDeps([0,1,2,3]));return new i(o)},r)}export{a as Slow,s as loadExternalSlowInteraction};