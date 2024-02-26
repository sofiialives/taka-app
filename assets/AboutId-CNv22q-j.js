import{a as t,d as o,b as p,r as n,c as f,j as e,L as h,I as c,N as g}from"./index-DLM_LoTc.js";import{i as u}from"./photoArray-DVwLZvwN.js";const b=t.div`
  .back-icon {
    width: 24px;
    height: 24px;
  }
  .logo-icon {
    width: 88px;
    height: 27px;
    margin-bottom: 22px;
  }
  @media ${o.desktop} {
    display: flex;
    gap: 105px;
    .description-section {
      width: 525px;
    }
  }
`,j=t.div`
  width: 315px;
  height: 336px;
  overflow: hidden;
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media ${o.desktop} {
    width: 667px;
    height: 408px;
  }
`,v=t.ul`
  display: flex;
  gap: 85px;
  @media ${o.desktop} {
    display: none;
  }
`,k=t.h2`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 32px;
  color: var(--stack-color);
  margin-top: 24px;
  @media ${o.desktop} {
    font-family: var(--inter-font-medium);
    color: var(--black-color);
    font-weight: 500;
    font-size: 36px;
    margin-top: 0;
    margin-bottom: 41px;
  }
`,w=t.p`
  font-family: var(--montserrat-font-regular);
  font-size: 16px;
  margin-top: 12px;
  color: var(--black-color);
  @media ${o.desktop} {
    font-family: var(--inter-font-regular);
    font-size: 14px;
    margin-top: 0;
    color: var(--black-color);
  }
`,I=()=>{var r;const d=p(),l=n.useRef(((r=d.state)==null?void 0:r.from)??"/"),{id:a}=f(),[m,x]=n.useState(!1),i=u.find(s=>s.id===Number(a));return n.useEffect(()=>{const s=()=>{x(window.innerWidth>=1440)};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]),i?e.jsx("section",{className:"about-section",children:e.jsxs(b,{className:"container",children:[e.jsxs(v,{children:[e.jsx("li",{children:e.jsx(h,{to:l.current,children:e.jsx(c,{id:"back",className:"back-icon"})})}),e.jsx("li",{children:e.jsx(g,{to:"/",children:e.jsx(c,{id:"logo",className:"logo-icon"})})})]}),e.jsx(j,{children:e.jsx("img",{src:m?i.imageLarge:i.image,alt:"mission",className:"image"})}),e.jsxs("div",{className:"description-section",children:[e.jsx(k,{children:i.id===0?i.titleId:i.title}),e.jsx(w,{children:i.descr})]})]})},a):"Image is not defined"},N=()=>e.jsx("section",{children:e.jsx(I,{})});export{N as default};
