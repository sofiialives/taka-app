import{u as t,d as o,e as f,b as a,g,r as h,j as e,f as u,I as d,N as b}from"./index-Bffr_-NO.js";import{i as j}from"./photoArray-11kvxW3C.js";import{m as v}from"./motion-BXGpgztK.js";const k=t.div`
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
`,w=t.div`
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
`,y=t.ul`
  display: flex;
  gap: 85px;
  @media ${o.desktop} {
    display: none;
  }
`,I=t.h2`
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
`,L=t.p`
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
`,N=()=>{var c;const l=f(),m=a.useRef(((c=l.state)==null?void 0:c.from)??"/"),{id:n}=g(),[p,x]=a.useState(!1),r=h.useMediaQuery({query:"(min-width: 1440px)"}),i=j.find(s=>s.id===Number(n));return a.useEffect(()=>{const s=()=>{x(r)};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[r]),i?e.jsx("section",{className:"about-section",children:e.jsxs(k,{className:"container",children:[e.jsxs(y,{children:[e.jsx("li",{children:e.jsx(u,{to:m.current,children:e.jsx(d,{id:"back",className:"back-icon"})})}),e.jsx("li",{children:e.jsx(b,{to:"/",children:e.jsx(d,{id:"logo",className:"logo-icon"})})})]}),e.jsx(w,{children:e.jsx("img",{src:p?i.imageLarge:i.image,alt:"mission",className:"image"})}),e.jsxs("div",{className:"description-section",children:[e.jsx(I,{children:i.id===0?i.titleId:i.title}),e.jsx(L,{children:i.descr})]})]})},n):"Image is not defined"},$=()=>e.jsx(v.section,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:2.5},children:e.jsx(N,{})});export{$ as default};
