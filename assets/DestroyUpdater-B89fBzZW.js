import{s as h,e as b,d as a,N as u,i as v,a1 as z,O as y,a2 as m}from"./index-v3hpYkwK.js";import{V as g}from"./ValueWithRandom-CPhx2iSX.js";import{O as x}from"./OptionsColor-OZo9Vai9.js";import{l as C}from"./OptionsUtils-D0R8Ijng.js";import"./AnimationOptions-YVfiWPjD.js";import"./AnimatableColor-isRzOZlc.js";class S{load(o){o&&(o.bottom!==void 0&&(this.bottom=h(o.bottom)),o.left!==void 0&&(this.left=h(o.left)),o.right!==void 0&&(this.right=h(o.right)),o.top!==void 0&&(this.top=h(o.top)))}}class w extends g{constructor(){super(),this.value=3}}class B extends g{constructor(){super(),this.value={min:4,max:9}}}class D{constructor(){this.count=1,this.factor=new w,this.rate=new B,this.sizeOffset=!0}load(o){o&&(o.color!==void 0&&(this.color=x.create(this.color,o.color)),o.count!==void 0&&(this.count=o.count),this.factor.load(o.factor),this.rate.load(o.rate),this.particles=b(o.particles,t=>a({},t)),o.sizeOffset!==void 0&&(this.sizeOffset=o.sizeOffset),o.colorOffset&&(this.colorOffset=this.colorOffset??{},o.colorOffset.h!==void 0&&(this.colorOffset.h=o.colorOffset.h),o.colorOffset.s!==void 0&&(this.colorOffset.s=o.colorOffset.s),o.colorOffset.l!==void 0&&(this.colorOffset.l=o.colorOffset.l)))}}class R{constructor(){this.bounds=new S,this.mode="none",this.split=new D}load(o){o&&(o.mode&&(this.mode=o.mode),o.bounds&&this.bounds.load(o.bounds),this.split.load(o.split))}}const O=0,F=.5,P=0,V=1,k=500,E=0;function M(l,o,t,s){const r=t.options.destroy;if(!r)return;const i=r.split,e=C(l,o,t.options),f=u(i.factor.value),c=t.getFillColor();i.color?e.color.load(i.color):i.colorOffset&&c?e.color.load({value:{hsl:{h:c.h+u(i.colorOffset.h??O),s:c.s+u(i.colorOffset.s??O),l:c.l+u(i.colorOffset.l??O)}}}):e.color.load({value:{hsl:t.getFillColor()}}),e.move.load({center:{x:t.position.x,y:t.position.y,mode:"precise"}}),z(e.size.value)?e.size.value/=f:(e.size.value.min/=f,e.size.value.max/=f),e.load(s);const p=i.sizeOffset?h(-t.size.value,t.size.value):O,d={x:t.position.x+y(p),y:t.position.y+y(p)};return o.particles.addParticle(d,e,t.group,n=>n.size.value<F?!1:(n.velocity.length=y(h(t.velocity.length,n.velocity.length)),n.splitCount=(t.splitCount??P)+V,n.unbreakable=!0,setTimeout(()=>{n.unbreakable=!1},k),!0))}function N(l,o,t){const s=t.options.destroy;if(!s)return;const r=s.split;if(r.count>=E&&(t.splitCount===void 0||t.splitCount++>r.count))return;const i=u(r.rate.value),e=v(r.particles);for(let f=0;f<i;f++)M(l,o,t,e)}class A{constructor(o,t){this.container=t,this.engine=o}init(o){const t=this.container,s=o.options,r=s.destroy;if(!r)return;o.splitCount=0;const i=r.bounds;o.destroyBounds||(o.destroyBounds={});const{bottom:e,left:f,right:c,top:p}=i,{destroyBounds:d}=o,n=t.canvas.size;e&&(d.bottom=u(e)*n.height/m),f&&(d.left=u(f)*n.width/m),c&&(d.right=u(c)*n.width/m),p&&(d.top=u(p)*n.height/m)}isEnabled(o){return!o.destroyed}loadOptions(o,...t){o.destroy||(o.destroy=new R);for(const s of t)o.destroy.load(s==null?void 0:s.destroy)}particleDestroyed(o,t){if(t)return;const s=o.options.destroy;s&&s.mode==="split"&&N(this.engine,this.container,o)}update(o){if(!this.isEnabled(o))return;const t=o.getPosition(),s=o.destroyBounds;s&&(s.bottom!==void 0&&t.y>=s.bottom||s.left!==void 0&&t.x<=s.left||s.right!==void 0&&t.x>=s.right||s.top!==void 0&&t.y<=s.top)&&o.destroy()}}export{A as DestroyUpdater};
