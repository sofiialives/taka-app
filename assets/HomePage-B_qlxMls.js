import{u as o,a as c,j as t,L as A,I as l,d as x,r as v,h as k,b as r,c as I,A as N}from"./index-CK5L0rvO.js";import{m}from"./motion-9GkxS3eA.js";import{e as z}from"./eightgroup-oKGK3XUx.js";const C="/taka-app/assets/firsthome-DQkc468h.png",D=o.section`
  position: relative;
  padding: 404px 0;
  background-image: url(${C});
  background-repeat: no-repeat;
  background-position: center;

  .logo-icon {
    width: 159px;
    height: 49px;
    position: absolute;
    top: 71px;
    left: 50%;
    transform: translateX(-50%);
  }
`,L=o.button`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  font-size: 14px;
  color: var(--bg-color);
  border: 1px solid var(--bg-color);
  border-radius: 12px;
  padding: 20px 98px;
  background-color: transparent;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100px;
  cursor: pointer;
`,P=({handleButtonClick:e})=>{const{t:n}=c();return t.jsx(D,{children:t.jsxs("div",{className:"container",children:[t.jsx(A,{}),t.jsx(l,{id:"logo",className:"logo-icon"}),t.jsx(L,{type:"button",onClick:e,children:n("home.btn")})]})})},B="/taka-app/assets/secondhome-DXvD0jKx.png",E=o.section`
  position: relative;
  background-image: url(${B});
  background-repeat: no-repeat;
  background-position: center;
  padding: 404px 0;
  margin-top: 112px;

  .logo-icon {
    position: absolute;
    width: 159px;
    height: 49px;
    top: -72px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media ${x.desktop} {
    margin-top: 95px;
  }
`,Q=()=>{const e=v.useMediaQuery({query:"(min-width: 1440px)"});return t.jsx(E,{children:t.jsx("div",{className:"container",children:e?null:t.jsx(l,{id:"logo",className:"logo-icon"})})})},X="/taka-app/assets/thirdhome-mQVJpQPW.png",q=o.section`
  position: relative;
  background-image: url(${X});
  background-repeat: no-repeat;
  background-position: center;
  padding: 404px 0;
  margin-top: 112px;

  .logo-icon {
    position: absolute;
    width: 159px;
    height: 49px;
    top: -72px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media ${x.desktop} {
    margin-top: 95px;
  }
`,j=o.h1`
  font-family: var(--poppins-font-extrabold);
  font-weight: 800;
  font-size: 24px;
  line-height: 1.5;
  color: var(--bg-color);
  margin-bottom: 25px;
  white-space: nowrap;

  @media ${x.desktop} {
    font-size: 80px;
  }
`,M=k`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(calc(-100vh + 100%));
  }
`,w=o.p`
  font-family: var(--poppins-font-regular);
  font-size: 14px;
  line-height: 1.5;
  color: var(--bg-color);
  position: absolute;
  top: 35px;
  left: 0;
  width: 100%;
  padding: 10px;
  margin: 0;
  z-index: 9999;

  &.animated-text {
    animation: ${M} 2500ms ease-in-out forwards;
  }

  @media ${x.desktop} {
    font-size: 30px;
    top: 100px;
  }
`,S=o.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,R=()=>{const{t:e}=c(),[n,i]=r.useState(!1);r.useEffect(()=>{const s=setTimeout(()=>{i(!0)},2e3);return()=>clearTimeout(s)},[]);const a=v.useMediaQuery({query:"(min-width: 1440px)"});return t.jsx(q,{children:t.jsxs("div",{className:"container",children:[a?null:t.jsx(l,{id:"logo",className:"logo-icon"}),t.jsxs(S,{children:[t.jsx(j,{children:e("home.sew")}),t.jsx(w,{className:n?"animated-text":"",children:e("home.dream")})]})]})})},U="/taka-app/assets/fourthhome-uUePPPz2.png",V=o.section`
  position: relative;
  background-image: url(${U});
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--black-color);
  padding: 404px 0;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 112px;
    background-color: var(--slider-bg);
  }

  .logo-icon {
    position: absolute;
    width: 159px;
    height: 49px;
    top: 63.5px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media ${x.desktop} {
    margin-top: 95px;
    &::before {
      display: none;
    }
  }
`,Y=()=>{const{t:e}=c(),n=v.useMediaQuery({query:"(min-width: 1440px)"});return t.jsx(V,{children:t.jsxs("div",{className:"container",children:[n?null:t.jsx(l,{id:"logo",className:"logo-icon"}),t.jsxs(S,{children:[t.jsx(j,{children:e("home.success")}),t.jsx(w,{children:e("home.art")})]})]})})},F=o.section`
  position: relative;
  margin-top: 112px;
  .logo-icon {
    position: absolute;
    width: 159px;
    height: 49px;
    top: -72px;
    left: 50%;
    transform: translateX(-50%);
  }
`,O=o.h1`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  color: var(--stack-color);
  text-align: center;
`,H=o.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 80px;
`,J=o.p`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: var(--advantagy-text);
`,K=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);

  .step {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin: 0 22px;
    background-color: var(--circle-grey);
  }

  .step.active {
    background-color: var(--circle-black);
  }
`,W=({advantagies:e,activeStep:n})=>t.jsx(K,{children:[...Array(e.length)].map((i,a)=>t.jsx("div",{className:`step ${a===n?"active":""}`},a))}),_=({advantagies:e})=>t.jsx(H,{children:e.map((n,i)=>t.jsx(m.li,{initial:{x:"100%",opacity:0},animate:{x:0,opacity:1},transition:{duration:.6,delay:i*1.6},children:t.jsx(J,{children:n})},i))}),G=()=>{const{t:e}=c(),n=[`${e("home.high")}`,`${e("home.approach")}`,`${e("home.deadline")}`,`${e("home.design")}`],[i,a]=r.useState(0);return r.useEffect(()=>{const s=setInterval(()=>{a(d=>(d+1)%n.length)},1600);return()=>clearInterval(s)},[n.length]),t.jsx(F,{className:"section",children:t.jsxs("div",{className:"container",children:[t.jsx(l,{id:"logo",className:"logo-icon"}),t.jsx(O,{children:e("home.advantagy")}),t.jsx(_,{advantagies:n}),t.jsx(W,{advantagies:n,activeStep:i})]})})},Z=({content:e,isVisible:n})=>t.jsx(m.section,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.8,ease:"easeInOut"},style:{position:"absolute",top:0,left:0,right:0,bottom:0,visibility:n?"visible":"hidden"},children:e}),tt=k`
  from {
    transform: translateY(0);
    opacity: 0;
  }
  to {
    transform: translateY(100%);
    opacity: 1;
  }
`,et=o.h1`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 36px;
  line-height: 1;
  color: var(--black-color);
  margin-bottom: 204px;
  text-align: center;
  opacity: 0;

  &.animated-text {
    animation: ${tt} 1600ms ease-in-out forwards;
  }
`,nt=o.div`
  position: relative;
  display: flex;
  gap: 80px;

  &::before {
    content: "";
    position: absolute;
    top: -124px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--black-color);
    padding: 0 62px;
  }
`,ot=o.ul`
  display: flex;
  flex-direction: column;
  gap: 62px;

  .advantagy-icon {
    width: 64px;
    height: 56px;
    fill: var(--black-color);
  }

  .advantagy-li {
    display: flex;
    align-items: baseline;
    gap: 36px;
  }
`,at=o.p`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  font-size: 36px;
  line-height: 1;
  color: var(--black-color);
`,it=o.img`
  width: 482px;
  height: 425px;
`,st="/taka-app/assets/firstadv-BLTRpDF0.png",rt="/taka-app/assets/thirdadv-CrA9iUyy.png",ct="/taka-app/assets/fourthadv-CD1a0bn7.png",lt=()=>{const e=[st,z,rt,ct],n={hidden:{opacity:0},visible:{opacity:1}},[i,a]=r.useState(0);return r.useEffect(()=>{let s;return s=setInterval(()=>{a(d=>(d+1)%e.length)},1600),i===e.length-1&&clearInterval(s),()=>clearInterval(s)},[e.length,i]),t.jsx(m.ul,{children:t.jsx(m.li,{variants:n,initial:"hidden",animate:"visible",exit:"hidden",transition:{duration:.6,ease:"easeInOut"},children:t.jsx(it,{src:e[i],alt:"advantage image"})},i)})},dt=()=>{const{t:e}=c(),n=[{id:"tick",text:`${e("home.high")}`},{id:"cool",text:`${e("home.approach")}`},{id:"alarm",text:`${e("home.deadline")}`},{id:"click",text:`${e("home.design")}`}],i={hidden:{opacity:0,y:-10},visible:{opacity:1,y:0}};return t.jsx(ot,{children:n.map((a,s)=>t.jsxs(m.li,{variants:i,initial:"hidden",animate:"visible",exit:"hidden",transition:{duration:.6,ease:"easeInOut",delay:s*1.6},className:"advantagy-li",children:[t.jsx(l,{id:a.id,className:"advantagy-icon"}),t.jsx(at,{children:a.text})]},s))})},pt=()=>{const{t:e}=c();return t.jsx("section",{className:"section",children:t.jsxs("div",{className:"container",children:[t.jsx(et,{className:"animated-text",children:e("home.advantagy")}),t.jsxs(nt,{children:[t.jsx(lt,{}),t.jsx(dt,{})]})]})})},ht=()=>{var b,y;const e=I(),[n,i]=r.useState(!1),[a,s]=r.useState(0),d=r.useRef(null),p=v.useMediaQuery({query:"(min-width: 1440px)"}),$=()=>{i(!0),p||u(0)},h=[{key:"start",content:p?null:t.jsx(P,{handleButtonClick:$})},{key:"section2",content:t.jsx(Q,{})},{key:"section3",content:t.jsx(R,{})},{key:"section4",content:t.jsx(Y,{})},{key:"section5",content:p?t.jsx(pt,{}):t.jsx(G,{})}],u=r.useCallback(async f=>{if(s(f),f<h.length-1){await new Promise(T=>setTimeout(T,f===0?0:2500));const g=f+1;u(g)}else await new Promise(g=>setTimeout(g,6600)),s(g=>g+1),e("/about")});return r.useEffect(()=>{if(p&&!n)return u(a),()=>{clearTimeout(d.current)}},[p,n,a,h.length,e,u]),t.jsx(N,{initial:!1,custom:a,wait:!0,children:t.jsx(Z,{content:(b=h[a])==null?void 0:b.content,isVisible:!0},(y=h[a])==null?void 0:y.key)})};export{ht as default};
