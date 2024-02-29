import{u as t,d as o,e as f,r as n,g,b as h,j as e,f as u,I as d,N as b}from"./index-3TRxtfpr.js";import{i as j}from"./photoArray-W6B9F5DH.js";const v=t.div`
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
`,k=t.div`
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
`,w=t.ul`
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
`,y=t.p`
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
`,L=()=>{var c;const l=f(),m=n.useRef(((c=l.state)==null?void 0:c.from)??"/"),{id:a}=g(),[p,x]=n.useState(!1),r=h.useMediaQuery({query:"(min-width: 1440px)"}),i=j.find(s=>s.id===Number(a));return n.useEffect(()=>{const s=()=>{x(r)};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[r]),i?e.jsx("section",{className:"about-section",children:e.jsxs(v,{className:"container",children:[e.jsxs(w,{children:[e.jsx("li",{children:e.jsx(u,{to:m.current,children:e.jsx(d,{id:"back",className:"back-icon"})})}),e.jsx("li",{children:e.jsx(b,{to:"/",children:e.jsx(d,{id:"logo",className:"logo-icon"})})})]}),e.jsx(k,{children:e.jsx("img",{src:p?i.imageLarge:i.image,alt:"mission",className:"image"})}),e.jsxs("div",{className:"description-section",children:[e.jsx(I,{children:i.id===0?i.titleId:i.title}),e.jsx(y,{children:i.descr})]})]})},a):"Image is not defined"},A=()=>e.jsx("section",{children:e.jsx(L,{})});export{A as default};
