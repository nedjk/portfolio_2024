const __vite__fileDeps=["assets/Bouncer-aSRdD5is.js","assets/index-C9_eWPxX.js","assets/index-JAAk9KWO.css","assets/Ranges-Bg1r910L.js","assets/ExternalInteractorBase-CIi3zRdK.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-C9_eWPxX.js";class i{constructor(){this.distance=200}load(n){n&&n.distance!==void 0&&(this.distance=n.distance)}}async function a(t,n=!0){await t.addInteractor("externalBounce",async e=>{const{Bouncer:r}=await o(()=>import("./Bouncer-aSRdD5is.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},n)}export{i as Bounce,a as loadExternalBounceInteraction};