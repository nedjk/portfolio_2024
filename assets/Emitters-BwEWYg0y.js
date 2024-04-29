const __vite__fileDeps=["assets/EmittersPlugin-giDaxQP9.js","assets/index-C9_eWPxX.js","assets/index-JAAk9KWO.css","assets/AnimatableColor-BO9U9AOd.js","assets/AnimationOptions-L9852pSN.js","assets/OptionsColor-BLrAj1qt.js","assets/EmitterInstance-DMJsnVGd.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{Z as c,_ as l,a3 as d,a5 as u,a6 as f,e as y}from"./index-C9_eWPxX.js";class v{constructor(i,e){this.container=e,this._engine=i,this.array=[],this.emitters=[],this.interactivityEmitters={random:{count:1,enable:!1},value:[]};const s=0;e.getEmitter=t=>t===void 0||c(t)?this.array[t??s]:this.array.find(r=>r.name===t),e.addEmitter=async(t,r)=>this.addEmitter(t,r),e.removeEmitter=t=>{const r=e.getEmitter(t);r&&this.removeEmitter(r)},e.playEmitter=t=>{const r=e.getEmitter(t);r&&r.externalPlay()},e.pauseEmitter=t=>{const r=e.getEmitter(t);r&&r.externalPause()}}async addEmitter(i,e){const{Emitter:s}=await l(()=>import("./EmittersPlugin-giDaxQP9.js").then(n=>n.b),__vite__mapDeps([0,1,2,3,4,5])),{EmitterInstance:t}=await l(()=>import("./EmitterInstance-DMJsnVGd.js"),__vite__mapDeps([6,0,1,2,3,4,5])),r=new s;r.load(i);const a=new t(this._engine,this,this.container,r,e);return await a.init(),this.array.push(a),a}handleClickMode(i){const e=this.emitters,s=this.interactivityEmitters;if(i!=="emitter")return;let t;if(s&&d(s.value))if(s.value.length>0&&s.random.enable){t=[];const o=[];for(let m=0;m<s.random.count;m++){const h=u(s.value);if(o.includes(h)&&o.length<s.value.length){m--;continue}o.push(h),t.push(f(s.value,h))}}else t=s.value;else t=s==null?void 0:s.value;const r=t??e,a=this.container.interactivity.mouse.clickPosition;y(r,async n=>{await this.addEmitter(n,a)})}async init(){if(this.emitters=this.container.actualOptions.emitters,this.interactivityEmitters=this.container.actualOptions.interactivity.modes.emitters,!!this.emitters)if(d(this.emitters))for(const i of this.emitters)await this.addEmitter(i);else await this.addEmitter(this.emitters)}pause(){for(const i of this.array)i.pause()}play(){for(const i of this.array)i.play()}removeEmitter(i){const e=this.array.indexOf(i);e>=0&&this.array.splice(e,1)}resize(){for(const i of this.array)i.resize()}stop(){this.array=[]}update(i){for(const e of this.array)e.update(i)}}export{v as Emitters};
