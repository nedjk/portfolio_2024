import{s as o,d as r,a1 as u,a3 as v,e as w}from"./index-v3hpYkwK.js";import{A as f}from"./AnimatableColor-isRzOZlc.js";import{V as c,R as b}from"./ValueWithRandom-CPhx2iSX.js";import{O as h}from"./OptionsColor-OZo9Vai9.js";import{R as m}from"./AnimationOptions-YVfiWPjD.js";class g{constructor(){this.speed=2}load(e){e&&e.speed!==void 0&&(this.speed=e.speed)}}class x{constructor(){this.enable=!0,this.retries=0}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.retries!==void 0&&(this.retries=e.retries))}}class d extends c{constructor(){super(),this.value=1}}class y{constructor(){this.horizontal=new d,this.vertical=new d}load(e){e&&(this.horizontal.load(e.horizontal),this.vertical.load(e.vertical))}}class a{constructor(){this.absorb=new g,this.bounce=new y,this.enable=!1,this.maxSpeed=50,this.mode="bounce",this.overlap=new x}load(e){e&&(this.absorb.load(e.absorb),this.bounce.load(e.bounce),e.enable!==void 0&&(this.enable=e.enable),e.maxSpeed!==void 0&&(this.maxSpeed=o(e.maxSpeed)),e.mode!==void 0&&(this.mode=e.mode),this.overlap.load(e.overlap))}}class O{constructor(){this.close=!0,this.fill=!0,this.options={},this.type=[]}load(e){if(!e)return;const i=e.options;if(i!==void 0)for(const n in i){const t=i[n];t&&(this.options[n]=r(this.options[n]??{},t))}e.close!==void 0&&(this.close=e.close),e.fill!==void 0&&(this.fill=e.fill),e.type!==void 0&&(this.type=e.type)}}class z{constructor(){this.offset=0,this.value=90}load(e){e&&(e.offset!==void 0&&(this.offset=o(e.offset)),e.value!==void 0&&(this.value=o(e.value)))}}class R{constructor(){this.distance=200,this.enable=!1,this.rotate={x:3e3,y:3e3}}load(e){if(e&&(e.distance!==void 0&&(this.distance=o(e.distance)),e.enable!==void 0&&(this.enable=e.enable),e.rotate)){const i=e.rotate.x;i!==void 0&&(this.rotate.x=i);const n=e.rotate.y;n!==void 0&&(this.rotate.y=n)}}}class M{constructor(){this.x=50,this.y=50,this.mode="percent",this.radius=0}load(e){e&&(e.x!==void 0&&(this.x=e.x),e.y!==void 0&&(this.y=e.y),e.mode!==void 0&&(this.mode=e.mode),e.radius!==void 0&&(this.radius=e.radius))}}class S{constructor(){this.acceleration=9.81,this.enable=!1,this.inverse=!1,this.maxSpeed=50}load(e){e&&(e.acceleration!==void 0&&(this.acceleration=o(e.acceleration)),e.enable!==void 0&&(this.enable=e.enable),e.inverse!==void 0&&(this.inverse=e.inverse),e.maxSpeed!==void 0&&(this.maxSpeed=o(e.maxSpeed)))}}class P{constructor(){this.clamp=!0,this.delay=new c,this.enable=!1,this.options={}}load(e){e&&(e.clamp!==void 0&&(this.clamp=e.clamp),this.delay.load(e.delay),e.enable!==void 0&&(this.enable=e.enable),this.generator=e.generator,e.options&&(this.options=r(this.options,e.options)))}}class A{load(e){e&&(e.color!==void 0&&(this.color=h.create(this.color,e.color)),e.image!==void 0&&(this.image=e.image))}}class _{constructor(){this.enable=!1,this.length=10,this.fill=new A}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.fill!==void 0&&this.fill.load(e.fill),e.length!==void 0&&(this.length=e.length))}}class k{constructor(){this.default="out"}load(e){e&&(e.default!==void 0&&(this.default=e.default),this.bottom=e.bottom??e.default,this.left=e.left??e.default,this.right=e.right??e.default,this.top=e.top??e.default)}}class C{constructor(){this.acceleration=0,this.enable=!1}load(e){e&&(e.acceleration!==void 0&&(this.acceleration=o(e.acceleration)),e.enable!==void 0&&(this.enable=e.enable),e.position&&(this.position=r({},e.position)))}}class D{constructor(){this.angle=new z,this.attract=new R,this.center=new M,this.decay=0,this.distance={},this.direction="none",this.drift=0,this.enable=!1,this.gravity=new S,this.path=new P,this.outModes=new k,this.random=!1,this.size=!1,this.speed=2,this.spin=new C,this.straight=!1,this.trail=new _,this.vibrate=!1,this.warp=!1}load(e){if(!e)return;this.angle.load(u(e.angle)?{value:e.angle}:e.angle),this.attract.load(e.attract),this.center.load(e.center),e.decay!==void 0&&(this.decay=o(e.decay)),e.direction!==void 0&&(this.direction=e.direction),e.distance!==void 0&&(this.distance=u(e.distance)?{horizontal:e.distance,vertical:e.distance}:{...e.distance}),e.drift!==void 0&&(this.drift=o(e.drift)),e.enable!==void 0&&(this.enable=e.enable),this.gravity.load(e.gravity);const i=e.outModes;i!==void 0&&(v(i)?this.outModes.load(i):this.outModes.load({default:i})),this.path.load(e.path),e.random!==void 0&&(this.random=e.random),e.size!==void 0&&(this.size=e.size),e.speed!==void 0&&(this.speed=o(e.speed)),this.spin.load(e.spin),e.straight!==void 0&&(this.straight=e.straight),this.trail.load(e.trail),e.vibrate!==void 0&&(this.vibrate=e.vibrate),e.warp!==void 0&&(this.warp=e.warp)}}class I extends m{constructor(){super(),this.destroy="none",this.speed=2}load(e){super.load(e),e&&e.destroy!==void 0&&(this.destroy=e.destroy)}}class V extends b{constructor(){super(),this.animation=new I,this.value=1}load(e){if(!e)return;super.load(e);const i=e.animation;i!==void 0&&this.animation.load(i)}}class j{constructor(){this.enable=!1,this.width=1920,this.height=1080}load(e){if(!e)return;e.enable!==void 0&&(this.enable=e.enable);const i=e.width;i!==void 0&&(this.width=i);const n=e.height;n!==void 0&&(this.height=n)}}class N{constructor(){this.mode="delete",this.value=0}load(e){e&&(e.mode!==void 0&&(this.mode=e.mode),e.value!==void 0&&(this.value=e.value))}}class T{constructor(){this.density=new j,this.limit=new N,this.value=0}load(e){e&&(this.density.load(e.density),this.limit.load(e.limit),e.value!==void 0&&(this.value=e.value))}}class B{constructor(){this.blur=0,this.color=new h,this.enable=!1,this.offset={x:0,y:0},this.color.value="#000"}load(e){e&&(e.blur!==void 0&&(this.blur=e.blur),this.color=h.create(this.color,e.color),e.enable!==void 0&&(this.enable=e.enable),e.offset!==void 0&&(e.offset.x!==void 0&&(this.offset.x=e.offset.x),e.offset.y!==void 0&&(this.offset.y=e.offset.y)))}}class E{constructor(){this.close=!0,this.fill=!0,this.options={},this.type="circle"}load(e){if(!e)return;const i=e.options;if(i!==void 0)for(const n in i){const t=i[n];t&&(this.options[n]=r(this.options[n]??{},t))}e.close!==void 0&&(this.close=e.close),e.fill!==void 0&&(this.fill=e.fill),e.type!==void 0&&(this.type=e.type)}}class F extends m{constructor(){super(),this.destroy="none",this.speed=5}load(e){super.load(e),e&&e.destroy!==void 0&&(this.destroy=e.destroy)}}class L extends b{constructor(){super(),this.animation=new F,this.value=3}load(e){if(super.load(e),!e)return;const i=e.animation;i!==void 0&&this.animation.load(i)}}class p{constructor(){this.width=0}load(e){e&&(e.color!==void 0&&(this.color=f.create(this.color,e.color)),e.width!==void 0&&(this.width=o(e.width)),e.opacity!==void 0&&(this.opacity=o(e.opacity)))}}class W extends c{constructor(){super(),this.opacityRate=1,this.sizeRate=1,this.velocityRate=1}load(e){super.load(e),e&&(e.opacityRate!==void 0&&(this.opacityRate=e.opacityRate),e.sizeRate!==void 0&&(this.sizeRate=e.sizeRate),e.velocityRate!==void 0&&(this.velocityRate=e.velocityRate))}}class G{constructor(e,i){this._engine=e,this._container=i,this.bounce=new y,this.collisions=new a,this.color=new f,this.color.value="#fff",this.effect=new O,this.groups={},this.move=new D,this.number=new T,this.opacity=new V,this.reduceDuplicates=!1,this.shadow=new B,this.shape=new E,this.size=new L,this.stroke=new p,this.zIndex=new W}load(e){if(!e)return;if(e.groups!==void 0)for(const n of Object.keys(e.groups)){if(!Object.hasOwn(e.groups,n))continue;const t=e.groups[n];t!==void 0&&(this.groups[n]=r(this.groups[n]??{},t))}e.reduceDuplicates!==void 0&&(this.reduceDuplicates=e.reduceDuplicates),this.bounce.load(e.bounce),this.color.load(f.create(this.color,e.color)),this.effect.load(e.effect),this.move.load(e.move),this.number.load(e.number),this.opacity.load(e.opacity),this.shape.load(e.shape),this.size.load(e.size),this.shadow.load(e.shadow),this.zIndex.load(e.zIndex),this.collisions.load(e.collisions),e.interactivity!==void 0&&(this.interactivity=r({},e.interactivity));const i=e.stroke;if(i&&(this.stroke=w(i,n=>{const t=new p;return t.load(n),t})),this._container){const n=this._engine.updaters.get(this._container);if(n)for(const l of n)l.loadOptions&&l.loadOptions(this,e);const t=this._engine.interactors.get(this._container);if(t)for(const l of t)l.loadParticlesOptions&&l.loadParticlesOptions(this,e)}}}function X(s,...e){for(const i of e)s.load(i)}function K(s,e,...i){const n=new G(s,e);return X(n,...i),n}export{X as a,K as l};
