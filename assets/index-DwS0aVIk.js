const __vite__fileDeps=["assets/index-B4DCyUsM.js","assets/index-I0zFQ3J0.js","assets/index-DCiutzlE.css","assets/index-k4blnN6k.js","assets/index-D0npuyTA.js","assets/index-C6VDCRom.js","assets/index-Dn0XKFuw.js","assets/index-dsqALEt2.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as t}from"./index-I0zFQ3J0.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-B4DCyUsM.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-k4blnN6k.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-D0npuyTA.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-C6VDCRom.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Dn0XKFuw.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-dsqALEt2.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};