const __vite__fileDeps=["assets/Grabber-VApppp2a.js","assets/CanvasUtils-Ct9999m1.js","assets/index-C9_eWPxX.js","assets/index-JAAk9KWO.css","assets/ExternalInteractorBase-CIi3zRdK.js","assets/OptionsColor-BLrAj1qt.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-C9_eWPxX.js";import{O as s}from"./OptionsColor-BLrAj1qt.js";class r{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(i){i&&(i.blink!==void 0&&(this.blink=i.blink),i.color!==void 0&&(this.color=s.create(this.color,i.color)),i.consent!==void 0&&(this.consent=i.consent),i.opacity!==void 0&&(this.opacity=i.opacity))}}class f{constructor(){this.distance=100,this.links=new r}load(i){i&&(i.distance!==void 0&&(this.distance=i.distance),this.links.load(i.links))}}async function a(n,i=!0){await n.addInteractor("externalGrab",async o=>{const{Grabber:t}=await e(()=>import("./Grabber-VApppp2a.js"),__vite__mapDeps([0,1,2,3,4,5]));return new t(o)},i)}export{f as Grab,r as GrabLinks,a as loadExternalGrabInteraction};
